import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjansteanteckningarComponent } from './tjansteanteckningar.component';

describe('TjansteanteckningarComponent', () => {
  let component: TjansteanteckningarComponent;
  let fixture: ComponentFixture<TjansteanteckningarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjansteanteckningarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjansteanteckningarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
