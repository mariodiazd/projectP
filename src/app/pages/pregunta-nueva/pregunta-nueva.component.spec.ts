import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaNuevaComponent } from './pregunta-nueva.component';

describe('PreguntaNuevaComponent', () => {
  let component: PreguntaNuevaComponent;
  let fixture: ComponentFixture<PreguntaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaNuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
