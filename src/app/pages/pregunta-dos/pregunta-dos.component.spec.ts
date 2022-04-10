import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaDosComponent } from './pregunta-dos.component';

describe('PreguntaDosComponent', () => {
  let component: PreguntaDosComponent;
  let fixture: ComponentFixture<PreguntaDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
