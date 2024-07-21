import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroCredentialsComponent } from './home-intro-credentials.component';

describe('HomeIntroCredentialsComponent', () => {
  let component: HomeIntroCredentialsComponent;
  let fixture: ComponentFixture<HomeIntroCredentialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIntroCredentialsComponent]
    });
    fixture = TestBed.createComponent(HomeIntroCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
