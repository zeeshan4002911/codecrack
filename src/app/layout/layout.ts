import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppInit } from '../service/app-init';
import { Popover, Modal, Toast } from 'bootstrap';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { EditorView } from '../editor-view/editor-view';
import { DiffCheckerView } from '../diff-checker-view/diff-checker-view';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, FormsModule, EditorView, DiffCheckerView],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit, AfterViewInit, OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();
  public isMobile: boolean = false;

  selectedTab: string = 'editor';
  themeMode: string | undefined = 'light';
  languages: any = [];
  selectedLanguage: any = {};
  searchLanguage: string = '';
  codeShareId: string = '';

  // More Options popover variables
  popoverInstance!: Popover | undefined;
  @ViewChild('popoverBtn', { static: false }) popoverBtn!: ElementRef;
  @ViewChild('popoverContent', { static: false }) popoverContent!: TemplateRef<any>;

  private bModal: any;
  bModalMeta = {
    message: "This is a modal view",
    context: "",
    primary_btn_txt: "Confirm",
    secondary_btn_txt: "Close"
  };
  private bToast: any;

  constructor(
    private _appInit: AppInit,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._appInit.themeMode$.pipe(takeUntil(this._destroy)).subscribe((val: string) => {
      this.themeMode = val;
      this.bodyTagThemeUpdateHandler();
    });
    this._appInit.selectedLanguage$.pipe(takeUntil(this._destroy)).subscribe((language: any) => {
      this.selectedLanguage = language;
    });

    this.checkIfMobile();
  }

  ngOnInit(): void {
    this.languages = this._appInit.languages;
    this.selectedTab = this._appInit.selectedTab;

    const codeShareId = this._route.snapshot.paramMap.get('codeShareId');
    if (codeShareId) {
      this.codeShareId = codeShareId;
    } else {
      // Generating new code share id
      const newCodeShareId = new Date().getTime();
      this.codeShareId = String(newCodeShareId);
      this._router.navigate([`${newCodeShareId}`]);
    }
  }

  ngAfterViewInit(): void {
    const embeddedView = this.popoverContent.createEmbeddedView(null);
    const popoverContentEl = embeddedView.rootNodes[0];

    // Initialize Bootstrap Popover for More Options
    this.popoverInstance = new Popover(this.popoverBtn.nativeElement, {
      html: true,
      content: popoverContentEl,
      customClass: 'no-padding-popover'
    });

    // Initialize Bootstrap Modal
    const modalElement = document.getElementById('bModal');
    if (modalElement) {
      this.bModal = new Modal(modalElement);
      const primaryBtn = modalElement.querySelector('#primary-btn');
      const secondaryBtn = modalElement.querySelector('#secondary-btn');

      if (primaryBtn) {
        primaryBtn.addEventListener('click', () => this.bModalPrimaryBtnClickHandler());
      }
      if (secondaryBtn) {
        secondaryBtn.addEventListener('click', () => this.bModalSecondaryBtnClickHandler());
      }
    }

    // Initialize Bootstrap Toast
    const toastElement = document.getElementById('bToast');
    if (toastElement) {
      this.bToast = new Toast(toastElement);
    }

    this.checkIfMobile();
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  public setSelectedTab(tabName: string) {
    this.selectedTab = tabName;
    this._appInit.setSelectedTab(tabName);
  }

  public toggleTheme() {
    this.themeMode = (this.themeMode == 'light') ? 'dark' : 'light';
    this._appInit.toggleThemeMode(this.themeMode);
    this.bodyTagThemeUpdateHandler();
  }

  private bodyTagThemeUpdateHandler() {
    if (this.themeMode == 'dark') {
      // Dark mode by setting the bootstrap theme attribute on body
      document.body.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.setAttribute('data-bs-theme', 'light');
    }
  }

  public moreOptionHanlder(btnName: string) {
    if (this.selectedLanguage['id'] == 'json-compression') btnName = 'json-compression';
    this._appInit.dispatchAction(btnName);
  }

  public selectLanguage(language: any) {
    this.selectedLanguage = language;
    if (language['id'] !== 'json-compression')
      this._appInit.setEditorLanguage(language);
  }

  public filterLanguages() {
    const searchLanguage = this.searchLanguage.toLowerCase().trim();

    this.languages = this._appInit.languages.filter((language: any) => {
      const idSearch = language['id'].includes(searchLanguage);
      let aliasesSearch = false;
      if (language.hasOwnProperty('aliases') && Array.isArray(language['aliases'])) {
        aliasesSearch = language['aliases'].some((val: string) =>
          val.toLowerCase().includes(searchLanguage))
      }
      return idSearch || aliasesSearch;
    })
  }

  public resetApp() {
    this._appInit.resetApp();
  }

  public codeShareHandler(action: string) {
    if (action == 'pull-code') {
      this.bModalMeta['message'] = `This will pull the code from "${this.codeShareId}",
      and replace the current version of code. Would you like to continue?`;
    } else if (action == 'push-code') {
      this.bModalMeta['message'] = `This will push the code to "${this.codeShareId}",
      and replace the earlier version of code. Would you like to continue?`;
    }
    this.bModalMeta['context'] = action;
    this.bModal.show();
  }

  // Handler for Bootstrap Modal and Toast open
  openModal = () => (this.bModal) ? this.bModal.show() : null;
  openToast = () => (this.bToast) ? this.bToast.show() : null;

  // Hide popover once any any click happen outside the content of it
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.popoverInstance) {
      const targetElement = event.target as HTMLElement;
      const isInisdePopover = document.querySelector('.popover-content')?.contains(targetElement);

      if (!isInisdePopover) {
        this.popoverInstance.hide();
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkIfMobile();
  }

  bModalPrimaryBtnClickHandler() {
    // Closing the opened modal
    if (this.bModal) {
      this.bModal.hide();
    }

    // Handler invocation for push and pull of code to cloud
    if (this.bModalMeta['context'] == "pull-code") {
      this._appInit.getCloudData(this.codeShareId);
    } else if (this.bModalMeta['context'] == "push-code") {
      this._appInit.setCloudData(this.codeShareId);
    }
  }

  bModalSecondaryBtnClickHandler() {

  }

  ngOnDestroy(): void {
    this._destroy.next(false);
    this._destroy.complete();
    this.themeMode = undefined;
    this.popoverInstance = undefined;
  }
}
