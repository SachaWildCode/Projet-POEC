import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const clonedRequest = request.clone({
    withCredentials: true,
  });

  return next(clonedRequest);
};
