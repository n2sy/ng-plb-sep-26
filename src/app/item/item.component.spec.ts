import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Candidat } from '../models/candidat.model';
import { ItemComponent } from './item.component';
import { By } from '@angular/platform-browser';

describe('Test du ItemComponent', () => {
  let bart = new Candidat(1, 'bart', 'simpson', 23, 'Ingénieur');
  let fixture: ComponentFixture<ItemComponent>;
  let component: ItemComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemComponent],
    });

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
  });

  it('Affiche bien le prenom et le nom du candidat reçu en @Input', () => {
    fixture.componentRef.setInput('unCandidat', bart);
    fixture.detectChanges();

    let li = fixture.debugElement.query(By.css('li')).nativeElement;

    // expect(li.textContent).toContain('bart');
    // expect(li.textContent).toContain('simpson');
    expect(li.textContent).toContain('bart simpson');
  });

  it("Affiche bien l'avatar  du candidat renovoyé par le pipe", () => {
    fixture.componentRef.setInput('unCandidat', bart);
    fixture.detectChanges();

    let img = fixture.debugElement.query(By.css('img')).nativeElement;

    // expect(li.textContent).toContain('bart');
    // expect(li.textContent).toContain('simpson');
    expect(img.getAttribute('src')).toContain('avatar.jpg');
  });

  it('Doit emettre un candidat via @output() au click sur le li', () => {
    fixture.componentRef.setInput('unCandidat', bart);
    fixture.detectChanges();

    let candidatEmis: Candidat;

    component.eventToListe.subscribe((c) => (candidatEmis = c));
    fixture.debugElement.query(By.css('li')).triggerEventHandler('click');

    expect(candidatEmis).toBe(bart);
  });
});
