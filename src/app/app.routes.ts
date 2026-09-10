import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { InfosComponent } from './infos/infos.component';

export const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'accounts', component: HomeAccountsComponent },
  { path: 'servers', component: ManageServersComponent },
];
