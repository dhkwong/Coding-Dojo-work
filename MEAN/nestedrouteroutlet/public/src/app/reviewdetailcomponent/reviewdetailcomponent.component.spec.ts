import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewdetailcomponentComponent } from './reviewdetailcomponent.component';

describe('ReviewdetailcomponentComponent', () => {
  let component: ReviewdetailcomponentComponent;
  let fixture: ComponentFixture<ReviewdetailcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewdetailcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewdetailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
