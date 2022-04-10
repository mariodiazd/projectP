import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaSieteComponent } from './pregunta-siete.component';

describe('PreguntaSieteComponent', () => {
  let component: PreguntaSieteComponent;
  let fixture: ComponentFixture<PreguntaSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaSieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
