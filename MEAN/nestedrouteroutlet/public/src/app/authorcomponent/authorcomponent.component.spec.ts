import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorcomponentComponent } from './authorcomponent.component';

describe('AuthorcomponentComponent', () => {
  let component: AuthorcomponentComponent;
  let fixture: ComponentFixture<AuthorcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
