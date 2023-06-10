import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { LoginComponent } from './auth/pages/login/login.component';

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
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
