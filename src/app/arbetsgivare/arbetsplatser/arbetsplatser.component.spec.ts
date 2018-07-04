import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbetsplatserComponent } from './arbetsplatser.component';

describe('ArbetsplatserComponent', () => {
  let component: ArbetsplatserComponent;
  let fixture: ComponentFixture<ArbetsplatserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbetsplatserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbetsplatserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
