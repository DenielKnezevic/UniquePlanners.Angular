import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneriComponent } from './planeri.component';

describe('PlaneriComponent', () => {
  let component: PlaneriComponent;
  let fixture: ComponentFixture<PlaneriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
