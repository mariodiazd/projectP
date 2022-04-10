import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaSeisComponent } from './pregunta-seis.component';

describe('PreguntaSeisComponent', () => {
  let component: PreguntaSeisComponent;
  let fixture: ComponentFixture<PreguntaSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaSeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
