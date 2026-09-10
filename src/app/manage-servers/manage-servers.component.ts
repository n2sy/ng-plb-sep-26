import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgClass,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short.pipe';

@Component({
  selector: 'app-manage-servers',
  standalone: true,
  imports: [
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    ShortPipe,
  ],
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  allServers = [
    {
      nom: 'Production Server',
      type: 'small',
      date_d: new Date(2020, 3, 5),
      statut: 'critical',
    },
    {
      nom: 'Development Test Server',
      type: 'large',
      date_d: new Date(2022, 3, 5),
      statut: 'stable',
    },
    {
      nom: 'Production Test Server',
      type: 'small',
      date_d: new Date(2020, 3, 5),
      statut: 'offline',
    },
    {
      nom: 'Nidhal Server',
      type: 'medium',
      date_d: new Date(2020, 3, 5),
      statut: 'stable',
    },
  ];

  affecterClasse(st) {
    return {
      'list-group-item-success': st == 'stable', // ? true : false,
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
