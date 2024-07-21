import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroSectionComponent } from './home-hero-section.component';

describe('HomeHeroSectionComponent', () => {
  let component: HomeHeroSectionComponent;
  let fixture: ComponentFixture<HomeHeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHeroSectionComponent]
    });
    fixture = TestBed.createComponent(HomeHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
