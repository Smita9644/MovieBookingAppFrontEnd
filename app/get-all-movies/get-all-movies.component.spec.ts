import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMoviesComponent } from './get-all-movies.component';

describe('GetAllMoviesComponent', () => {
  let component: GetAllMoviesComponent;
  let fixture: ComponentFixture<GetAllMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
