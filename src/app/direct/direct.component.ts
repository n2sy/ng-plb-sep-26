import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css',
})
export class DirectComponent {
  bgColor = 'pink';
  font = 'Phosphate';

  class1 = true;
  class2 = true;
  class3 = false;

  switchClass() {
    if (this.class1) {
      this.class2 = true;
      this.class1 = false;
    } else if (this.class2) {
      this.class2 = false;
      this.class3 = true;
    } else {
      this.class3 = false;
      this.class1;
    }
  }
}
