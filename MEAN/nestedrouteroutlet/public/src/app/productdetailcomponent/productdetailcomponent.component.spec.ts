import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailcomponentComponent } from './productdetailcomponent.component';

describe('ProductdetailcomponentComponent', () => {
  let component: ProductdetailcomponentComponent;
  let fixture: ComponentFixture<ProductdetailcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
