import { Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { AssoPageComponent } from './pages/asso-page/asso-page.component';
import { TransparencyPageComponent } from './pages/transparency-page/transparency-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
    /*children: [
      { path: 'login', loadComponent: () => import('./pages/auth-page/login.component').then(m => m.LoginComponent) },
      {
        path: 'register',
        loadComponent: () => import('./pages/auth-page/register.component').then(m => m.RegisterComponent),
      },
    ],*/
  },
  { path: '', component: LandingPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'asso', component: AssoPageComponent },
  { path: 'transparency', component: TransparencyPageComponent },
  { path: 'profile', component: UserPageComponent },
  { path: '**', redirectTo: '' },
];
