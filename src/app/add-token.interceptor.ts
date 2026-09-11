import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Requete Originale', req);
  if (req.method == 'GET') return next(req);

  let token = localStorage.getItem('access_token');
  if (token) {
    let cloneReq = req.clone({
      headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
    });
    console.log('Requete Clonée', cloneReq);

    return next(cloneReq);
  }
  return next(req);
};
