import { Routes } from '@angular/router';

import { Donations2Component } from './components/donations2/donations2.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthGuard } from './core/guards/auth-guard.service';
import { AssoPageComponent } from './pages/asso-page/asso-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TransparencyPageComponent } from './pages/transparency-page/transparency-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'register',
        component: RegisterFormComponent,
      },
    ],
  },
  {
    path: 'profile',
    component: UserPageComponent,
    children: [
      //{
      //   path: 'compte',
      //   component: SideBarComponent,
      // },
      // {
      //   path: 'notifications',
      //   component: SideBarComponent,
      // },
      {
        path: 'dons',
        component: Donations2Component,
      },
      // {
      //   path: 'paiements',
      //   component: SideBarComponent,
      // },
      // {
      //   path: 'taxes',
      //   component: SideBarComponent,
      // },
    ],
  },
  { path: '', component: LandingPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'asso', component: AssoPageComponent },
  { path: 'transparency', component: TransparencyPageComponent },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: UserPageComponent,
  },
  { path: '**', redirectTo: '' },
];
