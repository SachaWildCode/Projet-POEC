import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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
    ],
  },
  {
    path: 'profile',
    component: UserPageComponent,
    children: [
      {
        path: 'compte',
        component: SidebarComponent,
      },
      {
        path: 'notifications',
        component: SidebarComponent,
      },
      {
        path: 'dons',
        component: SidebarComponent,
      },
      {
        path: 'paiements',
        component: SidebarComponent,
      },
      {
        path: 'taxes',
        component: SidebarComponent,
      },
    ],
  },

  { path: '', component: LandingPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'asso', component: AssoPageComponent },
  { path: 'transparency', component: TransparencyPageComponent },
  { path: 'profile', component: UserPageComponent },
  { path: '**', redirectTo: '' },
];
