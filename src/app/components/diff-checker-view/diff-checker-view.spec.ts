import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffCheckerView } from './diff-checker-view';

describe('DiffCheckerView', () => {
  let component: DiffCheckerView;
  let fixture: ComponentFixture<DiffCheckerView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffCheckerView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffCheckerView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
