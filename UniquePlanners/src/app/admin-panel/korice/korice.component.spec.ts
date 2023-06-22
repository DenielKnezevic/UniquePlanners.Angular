import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoriceComponent } from './korice.component';

describe('KoriceComponent', () => {
  let component: KoriceComponent;
  let fixture: ComponentFixture<KoriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
