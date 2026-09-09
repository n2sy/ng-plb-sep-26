import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input({ required: true }) bgColor: string = 'green';
  @Output() eventToParent = new EventEmitter<string>();

  sendEvent() {
    this.eventToParent.emit('Message de la part de votre enfant');
  }
}
