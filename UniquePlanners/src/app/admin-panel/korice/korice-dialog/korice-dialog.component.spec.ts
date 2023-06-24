import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoriceDialogComponent } from './korice-dialog.component';

describe('KoriceDialogComponent', () => {
  let component: KoriceDialogComponent;
  let fixture: ComponentFixture<KoriceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoriceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoriceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
