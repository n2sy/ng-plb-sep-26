import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input({ required: true }) bgColor: string = 'green';
}
