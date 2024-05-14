import { Injectable } from '@angular/core';
import { BLOCK_FILTERS } from '../../mocks/block-filters.mock';
import { HttpParams } from '@angular/common/http';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import {
  CollectionFilter,
  CollectionPayload,
  CollectionSet,
} from '../../model/model';
import { APP_SETTINGS } from '../../app.settings';
import { HttpDefaultService } from '../http-default/http-default.service';

@Injectable({
  providedIn: 'root',
})
export class ColletionService extends HttpDefaultService {
  constructor() {
    super();
  }

  getBlockFilters(): string[] {
    return BLOCK_FILTERS;
  }

  loadSets(filters: CollectionFilter): Observable<CollectionSet[]> {
    return of(filters).pipe(
      switchMap((filter) => {
        if (filter.block === null) {
          return of([]);
        }
        return this.setsRequest(filters);
      })
    );
  }

  private getSetsRequestParams(filters: CollectionFilter): HttpParams {
    const filterParam = [filters.block];
    if (filters.name) {
      const emptyRegex = /^\s+$/;
      filterParam.push(filters.name.replace(emptyRegex, ''));
    }
    return new HttpParams().set('name', filterParam.reverse().join('|'));
  }

  private setsRequest(filters: CollectionFilter): Observable<CollectionSet[]> {
    this.loading.next(true);
    return this.http
      .get<CollectionPayload>(`${APP_SETTINGS.MTG_API}/v1/sets`, {
        params: this.getSetsRequestParams(filters),
      })
      .pipe(
        map(({ sets }) =>
          sets.map((s) => ({
            ...s,
            releaseDate: new Date(s.releaseDate),
          }))
        ),
        tap(() => this.loading.next(false))
      );
  }
}
