import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { InfosComponent } from './infos/infos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReactComponent } from './react/react.component';
import { allowGuard } from './guards/allow.guard';
import { blockLoginGuard } from './guards/block-login.guard';
import { quitterLoginGuard } from './guards/quitter-login.guard';
import { quitterFormGuard } from './guards/quitter-form.guard';

export const myRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./accueil/accueil.component').then((c) => c.AccueilComponent),
  },
  {
    path: 'cv',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./cv/cv.component').then((c) => c.CvComponent),
      },
      {
        path: 'add',
        component: AddComponent,
        canDeactivate: [quitterFormGuard],
        canActivate: [allowGuard],
      },
      {
        path: ':id',
        children: [
          { path: '', component: InfosComponent },
          { path: 'edit', component: EditComponent },
        ],
      },
    ],
  },
  { path: 'accounts', component: HomeAccountsComponent },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
    canActivate: [blockLoginGuard],
    canDeactivate: [quitterLoginGuard],
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'react', component: ReactComponent },
  { path: '404', component: NotFoundComponent }, // Wild route
  { path: '**', redirectTo: '404' }, // Wild route
];
