import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardView } from './whiteboard-view';

describe('WhiteboardView', () => {
  let component: WhiteboardView;
  let fixture: ComponentFixture<WhiteboardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteboardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
