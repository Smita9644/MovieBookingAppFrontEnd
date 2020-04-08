import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShowDetailsComponent } from './about-show-details.component';

describe('AboutShowDetailsComponent', () => {
  let component: AboutShowDetailsComponent;
  let fixture: ComponentFixture<AboutShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutShowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
