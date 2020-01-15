import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseledgerComponent } from './browseledger.component';

describe('BrowseledgerComponent', () => {
  let component: BrowseledgerComponent;
  let fixture: ComponentFixture<BrowseledgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseledgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
