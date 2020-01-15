import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowauthorsComponent } from './showauthors.component';

describe('ShowauthorsComponent', () => {
  let component: ShowauthorsComponent;
  let fixture: ComponentFixture<ShowauthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowauthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
