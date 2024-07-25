import { Routes } from '@angular/router';

import { DonationsComponent } from './components/donations/donations.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UnderConstructComponent } from './components/under-construct/under-construct.component';
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
    canActivate: [AuthGuard],
    children: [
      {
        path: 'donations',
        component: DonationsComponent,
      },
      {
        path: '',
        component: UnderConstructComponent,
      },
      {
        path: 'payments',
        component: UnderConstructComponent,
      },
    ],
  },
  { path: '', component: LandingPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'asso', component: AssoPageComponent },
  { path: 'transparency', component: TransparencyPageComponent },
  { path: '**', redirectTo: '' },
];
