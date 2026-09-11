import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'https://backendangulartrainingvercel.vercel.app/auth';

  constructor(private http: HttpClient) {}

  inscription(identifiants) {
    return this.http.post(`${this.link}/register`, identifiants);
  }

  seConnecter(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  seDeconnecter() {}

  estConnecte() {}
}
