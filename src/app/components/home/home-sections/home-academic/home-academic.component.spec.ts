import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcademicComponent } from './home-academic.component';

describe('HomeAcademicComponent', () => {
  let component: HomeAcademicComponent;
  let fixture: ComponentFixture<HomeAcademicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAcademicComponent]
    });
    fixture = TestBed.createComponent(HomeAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
