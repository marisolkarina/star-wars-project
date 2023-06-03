import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    //canActivate: [AuthGuard],
    component: DashboardComponent,
    // children: []
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  // {
  //   path: 'auth',
  //   canActivate: [LoginGuard],
  //   component: AuthComponent,
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
