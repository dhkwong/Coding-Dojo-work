import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreviewscomponentComponent } from './allreviewscomponent.component';

describe('AllreviewscomponentComponent', () => {
  let component: AllreviewscomponentComponent;
  let fixture: ComponentFixture<AllreviewscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllreviewscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreviewscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
