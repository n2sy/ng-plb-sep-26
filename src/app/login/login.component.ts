import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  allLanguages = ['', 'js', 'php', 'python'];
  defaultLanguage = 'python';
  showLogin = true;
  showError = false;
  private auth = inject(AuthService);
  private router = inject(Router);

  myComment = 'Formation géniale';
  submitHandler(f: NgForm) {
    if (this.showLogin) {
      this.auth.seConnecter(f.value).subscribe({
        next: (data: any) => {
          localStorage.setItem('access_token', data.token);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          this.showError = true;
          f.reset();
        },
      });
    } else {
      this.auth.inscription(f.value).subscribe({
        next: (data: any) => {
          alert(data.message);
          this.toggleShowLogin();
        },
        error: (err) => {
          console.log("Probleme avec l'inscription");
        },
      });
    }
  }

  toggleShowLogin() {
    this.showLogin = !this.showLogin;
  }
}
