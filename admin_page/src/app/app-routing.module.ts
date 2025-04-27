import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './components/components.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { ChartComponent } from './chart/chart.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: '' , redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home' , component:HomeComponent},
  { path: 'dashboard' , component:DashboardComponent},
  { path: 'components' , component:ComponentsComponent},
  { path: 'forms' , component:FormsComponent},
  { path: 'tables' , component:TablesComponent},
  { path: 'chart' , component:ChartComponent},
  { path: 'details' , component:DetailsComponent},
  { path: 'profile' , component:ProfileComponent},
  { path: 'faq' , component:FaqComponent},
  { path: 'contact' , component:ContactComponent},
  { path: 'register' , component:RegisterComponent},
  { path: 'log_in' , component:LogInComponent},
  { path: 'notifications' , component:NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
