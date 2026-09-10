import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat.model';

export class GestionRecruesService {
  allRecrues: Candidat[] = [];

  addNewRecrue(newRecrue) {
    if (this.allRecrues.indexOf(newRecrue) == -1)
      this.allRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recruté...');
  }

  constructor() {}
}
