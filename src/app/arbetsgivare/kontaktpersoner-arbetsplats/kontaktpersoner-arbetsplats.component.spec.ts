import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktpersonerArbetsplatsComponent } from './kontaktpersoner-arbetsplats.component';

describe('KontaktpersonerArbetsplatsComponent', () => {
  let component: KontaktpersonerArbetsplatsComponent;
  let fixture: ComponentFixture<KontaktpersonerArbetsplatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktpersonerArbetsplatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktpersonerArbetsplatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
