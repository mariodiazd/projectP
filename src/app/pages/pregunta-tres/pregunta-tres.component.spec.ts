import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaTresComponent } from './pregunta-tres.component';

describe('PreguntaTresComponent', () => {
  let component: PreguntaTresComponent;
  let fixture: ComponentFixture<PreguntaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
