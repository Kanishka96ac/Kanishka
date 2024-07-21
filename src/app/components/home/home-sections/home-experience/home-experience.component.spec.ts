import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExperienceComponent } from './home-experience.component';

describe('HomeExperienceComponent', () => {
  let component: HomeExperienceComponent;
  let fixture: ComponentFixture<HomeExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeExperienceComponent]
    });
    fixture = TestBed.createComponent(HomeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
