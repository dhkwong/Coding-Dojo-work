import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcomponentComponent } from './productcomponent.component';

describe('ProductcomponentComponent', () => {
  let component: ProductcomponentComponent;
  let fixture: ComponentFixture<ProductcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
