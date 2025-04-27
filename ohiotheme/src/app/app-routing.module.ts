import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressStepComponent } from './progress-step/progress-step.component';
import { TestComponent } from './test/test.component';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'accordion', component:AccordionComponent},
  { path: 'progress', component:ProgressStepComponent},
  { path: 'test', component:TestComponent},
  { path: 'movie', component:MovieComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
