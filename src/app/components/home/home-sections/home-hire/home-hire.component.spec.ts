import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHireComponent } from './home-hire.component';

describe('HomeHireComponent', () => {
  let component: HomeHireComponent;
  let fixture: ComponentFixture<HomeHireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHireComponent]
    });
    fixture = TestBed.createComponent(HomeHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
