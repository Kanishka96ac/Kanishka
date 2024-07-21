import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcademicComponent } from './components/academic/academic.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { HiremeComponent } from './components/hireme/hireme.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SocialComponent } from './components/social/social.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "academic", component: AcademicComponent},
  {path: "experience", component: ExperienceComponent},
  {path: "portfolio", component: PortfolioComponent},
  { path: 'portfolio/:id', component: ProjectDetailComponent },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  {path: "contact", component: ContactComponent},
  {path: "hireme", component: HiremeComponent},
  {path: "aboutme", component: AboutMeComponent},
  {path: "social", component:SocialComponent},
  {path: "footer", component: FooterComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
