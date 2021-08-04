import { DefaultDataServiceConfig, EntityMetadataMap } from '@ngrx/data';
import { environment } from 'src/environments/environment';
import { Litter } from '../models/interfaces';

export const entityMetadata: EntityMetadataMap = {
    Dog: {
      filterFn: nameFilter,
      sortComparer: sortByIdDesc
    },
    Litter: {
      filterFn: nameFilter,
      sortComparer: sortByIdDesc
    },
    Task: {
      sortComparer: sortByRecurNextDate
    }
};

export function nameFilter(entities: { name: string }[], search: string) {
    return entities.filter(e => -1 < e.name.indexOf(search));
}

export function sortByName(a: { name: string }, b: { name: string }): number {
    return a.name.localeCompare(b.name);
}

function sortById(a: { id: number }, b: { id: number }): number {
  return a.id - b.id;
}

function sortByIdDesc(a: { id: number }, b: { id: number }): number {
  return b.id - a.id;
}

function sortByRecurNextDate(a: { recur: { nextDate: Date } }, b: { recur: { nextDate: Date } }): number {
  return Date.parse(a.recur.nextDate.toString()) - Date.parse(b.recur.nextDate.toString());
}

// Automatically pluralizing with no setting to turn off is stupid yo
const pluralNames = {
  Dog: 'Dog',
  Litter: 'Litter',
  Task: 'Task',
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.apiUrl,
  timeout: 3000, // request timeout
};
