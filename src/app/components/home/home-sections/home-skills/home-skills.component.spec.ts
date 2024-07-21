import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkillsComponent } from './home-skills.component';

describe('HomeSkillsComponent', () => {
  let component: HomeSkillsComponent;
  let fixture: ComponentFixture<HomeSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSkillsComponent]
    });
    fixture = TestBed.createComponent(HomeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
