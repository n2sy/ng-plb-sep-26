/// <reference types="jasmine" />

import { ShortPipe } from './short.pipe';

describe('Test du pipe Short', () => {
  let instance: ShortPipe;
  beforeEach(() => {
    instance = new ShortPipe();
  });

  it('Laisse une chaine de longueur 15 caractères inchangée', () => {
    let res = instance.transform('Nidhal Server', 15);
    expect(res).toBe('Nidhal Server');
  });

  it('Tronquer une chaine et rajouter .... lorsque la chaine est trop longue', () => {
    let res = instance.transform('Development Test Server', 5);
    expect(res).toBe('Devel...');
  });

  it('Retourne une chaine vide si appliquée sur une chaine vide', () => {
    let res = instance.transform('', 50);
    expect(res).toBe('');
  });
});
