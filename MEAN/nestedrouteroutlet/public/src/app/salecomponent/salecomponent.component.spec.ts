import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalecomponentComponent } from './salecomponent.component';

describe('SalecomponentComponent', () => {
  let component: SalecomponentComponent;
  let fixture: ComponentFixture<SalecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
