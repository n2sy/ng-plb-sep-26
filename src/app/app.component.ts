import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent, SecondComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-plb-sep-26';
}
