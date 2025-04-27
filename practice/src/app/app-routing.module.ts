import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { PracticeComponent } from './practice/practice.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component:HomeComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LogInComponent },
  { path: 'practice', component:PracticeComponent},
  { path: 'portfolio' , component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
