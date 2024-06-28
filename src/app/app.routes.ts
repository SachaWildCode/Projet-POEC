// app.routes.ts //

// app.routes.ts //

import { Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { AssoPageComponent } from './pages/asso-page/asso-page.component';
import { TransparencyPageComponent } from './pages/transparency-page/transparency-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';

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
  { path: 'auth', component: AuthPageComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: '', component: LandingPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'asso', component: AssoPageComponent },
  { path: 'transparency', component: TransparencyPageComponent },
  { path: 'profile', component: UserPageComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'card', component: CardComponent },
  { path: '**', redirectTo: '' },
];
