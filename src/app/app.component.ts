import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-plb-sep-26';
}
