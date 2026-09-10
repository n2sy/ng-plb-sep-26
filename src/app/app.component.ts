import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { DirectComponent } from './direct/direct.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FirstComponent,
    SecondComponent,
    CvComponent,
    HomeAccountsComponent,
    DirectComponent,
    ManageServersComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-plb-sep-26';
}
