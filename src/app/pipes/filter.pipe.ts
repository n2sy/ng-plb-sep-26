import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatus: string): any[] {
    if (selStatus.length == 0) {
      return value;
    }
    return value.filter((serveur) => serveur['statut'] == selStatus);

    // Version longue
    // let newTabServers = [];
    // for (const serveur of value) {
    //   if (serveur['statut'] == selStatus) newTabServers.push(serveur);
    // }
    // return newTabServers;
  }
}
