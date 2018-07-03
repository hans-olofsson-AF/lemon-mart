import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbetsgivareComponent } from './arbetsgivare.component';

describe('ArbetsgivareComponent', () => {
  let component: ArbetsgivareComponent;
  let fixture: ComponentFixture<ArbetsgivareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbetsgivareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbetsgivareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
