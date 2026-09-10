import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  addition(a, b) {
    console.log('Le resultat est', a + b);
  }
}
