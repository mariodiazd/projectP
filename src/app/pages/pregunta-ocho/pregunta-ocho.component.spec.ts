import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaOchoComponent } from './pregunta-ocho.component';

describe('PreguntaOchoComponent', () => {
  let component: PreguntaOchoComponent;
  let fixture: ComponentFixture<PreguntaOchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaOchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaOchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
