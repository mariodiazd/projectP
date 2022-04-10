import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaCincoComponent } from './pregunta-cinco.component';

describe('PreguntaCincoComponent', () => {
  let component: PreguntaCincoComponent;
  let fixture: ComponentFixture<PreguntaCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
