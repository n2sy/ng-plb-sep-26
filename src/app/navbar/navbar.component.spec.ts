import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from '../item/item.component';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { provideRouter } from '@angular/router';

describe('Test du NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;
  let authSpy;
  const texteDesLiens = () => {
    return fixture.debugElement
      .queryAll(By.css('a'))
      .map((a) => a.nativeElement.textContent.trim());
  };

  beforeEach(() => {
    authSpy = jasmine.createSpyObj<AuthService>('AuthService', [
      'estConnecte',
      'seDeconnecter',
    ]);

    TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authSpy },
      ],
    });

    fixture = TestBed.createComponent(NavbarComponent);
  });

  it('Doit toujours afficher les liens publics', () => {
    authSpy.estConnecte.and.returnValue(false);
    fixture.detectChanges();
    let liens = texteDesLiens();
    console.log(liens);

    expect(liens).toContain('Accueil');
    expect(liens).toContain('Candidats');
    expect(liens).toContain('Accounts');
  });
  it('Doit afficher "ajout candidat" et "logout" quand un user est connecté', () => {
    authSpy.estConnecte.and.returnValue(true);
    fixture.detectChanges();
    let liens = texteDesLiens();
    console.log(liens);

    expect(liens).toContain('Ajout Candidat');
    expect(liens).toContain('Logout');
  });
  it('Doit appeler seDeconnecter quand on clique sur Logout', () => {
    authSpy.estConnecte.and.returnValue(true);
    fixture.detectChanges();

    const logout = fixture.debugElement
      .queryAll(By.css('a'))
      .find((a) => a.nativeElement['textContent'] == 'Logout');

    logout?.triggerEventHandler('click');

    expect(authSpy.seDeconnecter).toHaveBeenCalledTimes(1);
  });
});
