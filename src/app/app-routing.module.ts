import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TransferamountComponent } from './components/transferamount/transferamount.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:"full"
  },
  {
    path:"checkbalance",
    component:CheckbalanceComponent,
    pathMatch:"full"
  },
  {
    path:"transferamount",
    component:TransferamountComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
