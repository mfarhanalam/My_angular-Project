import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RewardComponent } from './reward/reward.component';
import { ClaimnowComponent } from './claimnow/claimnow.component';
import { SpinComponent } from './spin/spin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reward', component: RewardComponent },
  { path: 'claimnow', component: ClaimnowComponent },
  { path: 'spin', component: SpinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
