import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandcomponentComponent } from './brandcomponent.component';

describe('BrandcomponentComponent', () => {
  let component: BrandcomponentComponent;
  let fixture: ComponentFixture<BrandcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
