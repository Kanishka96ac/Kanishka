import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AcademicComponent } from './components/academic/academic.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { HiremeComponent } from './components/hireme/hireme.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SocialComponent } from './components/social/social.component';
import { HomeComponent } from './components/home/home.component';
import { HomePortfolioComponent } from './components/home/home-sections/home-portfolio/home-portfolio.component';
import { HomeSkillsComponent } from './components/home/home-sections/home-skills/home-skills.component';
import { HomeAcademicComponent } from './components/home/home-sections/home-academic/home-academic.component';
import { HomeExperienceComponent } from './components/home/home-sections/home-experience/home-experience.component';
import { HomeContactComponent } from './components/home/home-sections/home-contact/home-contact.component';
import { HomeHireComponent } from './components/home/home-sections/home-hire/home-hire.component';
import { HomeHeroSectionComponent } from './components/home/home-sections/home-hero-section/home-hero-section.component';
import { HomeIntroTextComponent } from './components/home/home-sections/home-intro-text/home-intro-text.component';
import { HomeIntroCredentialsComponent } from './components/home/home-sections/home-intro-credentials/home-intro-credentials.component';
import { ProjectDetailDialogComponent } from './components/project-detail-dialog/project-detail-dialog.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    AcademicComponent,
    ExperienceComponent,
    ContactComponent,
    HiremeComponent,
    FooterComponent,
    AboutMeComponent,
    SkillsComponent,
    SocialComponent,
    HomeComponent,
    HomePortfolioComponent,
    HomeSkillsComponent,
    HomeAcademicComponent,
    HomeExperienceComponent,
    HomeContactComponent,
    HomeHireComponent,
    HomeHeroSectionComponent,
    HomeIntroTextComponent,
    HomeIntroCredentialsComponent,
    ProjectDetailDialogComponent,
    ProjectDetailComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
