import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneriDialogComponent } from './planeri-dialog.component';

describe('PlaneriDialogComponent', () => {
  let component: PlaneriDialogComponent;
  let fixture: ComponentFixture<PlaneriDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneriDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneriDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
