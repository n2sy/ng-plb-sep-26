import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat.model';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private allCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 55, 'Chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 19, 'Designer', 'lisa.png'),
    new Candidat(4, 'marge', 'simpson', 33, 'Designer'),
  ];

  getAllCandidates() {
    return this.allCandidates;
  }

  addCandidate() {
    this.allCandidates.push(
      new Candidat(3, 'NEW', 'CANDIDAT', 19, 'Designer', 'lisa.png'),
    );
  }
  showInfos() {
    console.log('Je suis un service');
  }

  constructor() {}
}
