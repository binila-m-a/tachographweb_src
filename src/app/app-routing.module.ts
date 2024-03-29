import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverdailyactivityComponent } from './driverdailyactivity/driverdailyactivity.component';

const routes: Routes = [
  
  {
    path: '',
    component: DashboardComponent
  },
  {

    path: 'dailyactivity',

    pathMatch: 'full',

    component: DriverdailyactivityComponent

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
