import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
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

  public selectedTab: string | undefined = 'editor';
  public themeMode: string | undefined = 'light';
  public selectedLanguage: any = {};
  public searchLanguage: string = "";
  languages: any = [];
  codeShareURL: string = "aaa";

  // More Options and Code Share popover variables
  moreOptionsPopoverInstance!: Popover | undefined;
  @ViewChild('moreOptionsBtn', { static: false }) moreOptionsBtn!: ElementRef;
  @ViewChild('moreOptionsContent', { static: false }) moreOptionsContent!: TemplateRef<any>;
  codeSharePopoverInstance!: Popover | undefined;
  @ViewChild('codeShareBtn', { static: false }) codeShareBtn!: ElementRef;
  @ViewChild('codeShareContent', { static: false }) codeShareContent!: TemplateRef<any>;

  private bModal: any;
  bModalMeta = {
    message: "This is a modal view",
    context: "",
    primary_btn_txt: "Confirm",
    secondary_btn_txt: "Close"
  };
  private bToast: any;
  bToastMeta = {
    type: "",
    message: "This is a sample toast",
  }

  constructor(
    private _appInit: AppInit,
    private _route: ActivatedRoute,
    private _router: Router,
    private _viewContainerRef: ViewContainerRef
  ) {
    // Subscription for theme mode (light or dark) change to trigger layout theme update
    this._appInit.themeMode$.pipe(takeUntil(this._destroy)).subscribe((val: string) => {
      this.themeMode = val;
      this.bodyTagThemeUpdateHandler();
    });

    // Subscription for language change to reflect in layout
    this._appInit.selectedLanguage$.pipe(takeUntil(this._destroy)).subscribe((language: any) => {
      this.selectedLanguage = language;
    });


    this._appInit.appAction$.pipe(takeUntil(this._destroy)).subscribe((data: any) => {
      const { action, payload } = data;
      if (action == "bToast") {
        this.bToastMeta['type'] = payload['type']
        this.bToastMeta['message'] = payload['message'];
        this.bToast.show();
      }
    });

    this.checkIfMobile();
  }

  ngOnInit(): void {
    this.languages = this._appInit.languages;
    this.selectedTab = this._appInit.selectedTab;

    const codeShareId = this._route.snapshot.paramMap.get('codeShareId');
    if (codeShareId) {
      this._appInit.codeShareId = codeShareId;
    } else {
      // Generating new code share id
      const newCodeShareId = new Date().getTime();
      this._appInit.codeShareId = String(newCodeShareId);
      this._router.navigate([`${newCodeShareId}`]);
    }
    this.codeShareURL = window.location.href;
  }

  ngAfterViewInit(): void {
    const embeddedView = this.moreOptionsContent.createEmbeddedView(null);
    const moreOptionsContentEl = embeddedView.rootNodes[0];

    // Initialize Bootstrap Popover for More Options
    this.moreOptionsPopoverInstance = new Popover(this.moreOptionsBtn.nativeElement, {
      html: true,
      content: moreOptionsContentEl,
      customClass: 'no-padding-popover'
    });

    // Initialize Bootstrap Popover for code share dialog
    const codeShareEmbeddedView = this._viewContainerRef.createEmbeddedView(this.codeShareContent, {
      'codeShareURL': this.codeShareURL
    });
    const codeShareContentEl = codeShareEmbeddedView.rootNodes[0];

    this.codeSharePopoverInstance = new Popover(this.codeShareBtn.nativeElement, {
      html: true,
      content: codeShareContentEl,
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

  // Handler for Bootstrap Modal and Toast open
  openModal = () => (this.bModal) ? this.bModal.show() : null;
  openToast = () => (this.bToast) ? this.bToast.show() : null;

  // Hide popover once any any click happen outside the content of it
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.moreOptionsPopoverInstance) {
      const targetElement = event.target as HTMLElement;
      const isInisdePopover = document.querySelector('.popover-content')?.contains(targetElement);

      if (!isInisdePopover) {
        this.moreOptionsPopoverInstance.hide();
      }
    }

    if (this.codeSharePopoverInstance) {
      const targetElement = event.target as HTMLElement;
      const isInisdePopover = document.querySelector('.popover-content')?.contains(targetElement);

      if (!isInisdePopover) {
        this.codeSharePopoverInstance.hide();
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
      this._appInit.getCloudData();
    } else if (this.bModalMeta['context'] == "push-code") {
      this._appInit.setCloudData();
    }
  }

  bModalSecondaryBtnClickHandler() {

  }

  /* Code Share functionality handlers */
  // Cloud push and pull of code
  public codeShareHandler(action: string) {
    if (action == 'pull-code') {
      this.bModalMeta['message'] = `This will pull the code from "${this._appInit.codeShareId}",
      and replace the current version of code. Would you like to continue?`;
    } else if (action == 'push-code') {
      this.bModalMeta['message'] = `This will push the code to "${this._appInit.codeShareId}",
      and replace the earlier version of code. Would you like to continue?`;
    }
    if (this.codeSharePopoverInstance) this.codeSharePopoverInstance.hide();
    this.bModalMeta['context'] = action;
    this.bModal.show();
  }

  // Method to copy to clipboard
  copyToClipboard() {
    navigator.clipboard.writeText(this.codeShareURL).then(() => {
      this.bToastMeta['type'] = "success";
      this.bToastMeta['message'] = "Copied to Clipboard";
      this.bToast.show();
    }).catch(err => {
      console.error("Error in copy to clipboard", err);
      this.bToastMeta['type'] = "failed";
      this.bToastMeta['message'] = "Failed to Copy";
      this.bToast.show();
    }).finally(() => {
      if (this.codeSharePopoverInstance) this.codeSharePopoverInstance.hide();
    })
  }

  // Method to use Web Share API to open share pane;
  shareTheLink() {
    if (navigator.share) {
      // If the Web Share API is available
      navigator.share({
        title: 'Codecrack',
        text: 'A platform to write, format and share your code.',
        url: window.location.href
      })
        .then(() => {
          console.log('Content shared successfully');
        })
        .catch((error) => {
          console.error('Error sharing content:', error);
        });
    } else if (navigator.clipboard) {
      // Fallback to clipboard if Web Share is not supported
      this.copyToClipboard();
    } else {
      this.bToastMeta['type'] = "failed";
      this.bToastMeta['message'] = 'Sharing is not supported on your browser.';
      this.bToast.show();
    }
  }

  // Method to save or download the code
  async saveFile() {
    const content = this._appInit.editorCode;
    const extensions = this.selectedLanguage['extensions'] ?? ['.txt'];
    const fileAlias = this.selectedLanguage['aliases']?.[0] ?? 'Text';
    const mimeType = this.selectedLanguage['mimetypes']?.[0] ?? 'text/plain';
    const fileName = 'codecrack-editor-' + this._appInit.codeShareId + extensions[0];
    const acceptObj = { [mimeType]: extensions };

    if ('showSaveFilePicker' in window) {
      // If File System Access API is supported (Desktop Chrome, Edge, Android Chrome)
      try {
        const handle = await (window as any).showSaveFilePicker({
          suggestedName: fileName,
          types: [
            {
              description: `${fileAlias} file`,
              accept: acceptObj
            }
          ]
        });

        const writable = await handle.createWritable();
        await writable.write(content);
        await writable.close();

      } catch (err) {
        console.warn('Native save canceled or failed', err);
      }
    } else {
      // Fallback for Mozilla Firefox / iOS / Unsupported browsers ---
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 0);
    }
  }

  ngOnDestroy(): void {
    this._destroy.next(false);
    this._destroy.complete();
    this.themeMode = undefined;
    this.moreOptionsPopoverInstance = undefined;
    this.codeSharePopoverInstance = undefined;
    this.selectedTab = undefined;
    this.selectedLanguage = {};
    this.searchLanguage = "";
    this.languages = undefined;
    this.codeShareURL = "";
  }
}
