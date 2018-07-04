import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbetsplatsComponent } from './arbetsplats.component';

describe('ArbetsplatsComponent', () => {
  let component: ArbetsplatsComponent;
  let fixture: ComponentFixture<ArbetsplatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbetsplatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbetsplatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
