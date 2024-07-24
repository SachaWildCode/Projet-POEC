import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
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
    provideAnimations(), // required animations providers
    provideToastr({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      newestOnTop: false,
    }), // Toastr providers
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [UserService],
      multi: true,
    },
  ],
};
