import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroTextComponent } from './home-intro-text.component';

describe('HomeIntroTextComponent', () => {
  let component: HomeIntroTextComponent;
  let fixture: ComponentFixture<HomeIntroTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIntroTextComponent]
    });
    fixture = TestBed.createComponent(HomeIntroTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
