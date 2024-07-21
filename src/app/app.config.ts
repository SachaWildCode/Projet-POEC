import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth-interceptor.service';
import { IUser } from './shared/models/iuser';
import { UserService } from './shared/services/user.service';

const initializeApp = (userService: UserService) => {
  return () => {
    return lastValueFrom(userService.getUser())
      .then((user: IUser) => {
        userService.setUserInfo(user);
      })
      .catch(() => null);
  };
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [UserService],
      multi: true,
    },
  ],
};
