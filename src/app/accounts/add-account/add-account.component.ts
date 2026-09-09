import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allOptions = ['', 'active', 'inactive', 'unknown'];
  @Output() eventToHome = new EventEmitter();
  addAccount(nameValue, statusValue) {
    this.eventToHome.emit({
      name: nameValue,
      status: statusValue,
    });
  }
}
