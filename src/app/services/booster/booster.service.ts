import { Injectable } from '@angular/core';
import { HttpDefaultService } from '../http-default/http-default.service';
import { Observable, filter, map, of, switchMap, tap } from 'rxjs';
import { BoosterPayload, CardBooster } from '../../model/model';
import { APP_SETTINGS } from '../../app.settings';

@Injectable({
  providedIn: 'root',
})
export class BoosterService extends HttpDefaultService {
  constructor() {
    super();
  }

  retriveCreatureDeck(id: string): Observable<CardBooster[]> {
    return this.getCreaturesDeckRecursively(id);
  }

  private getCreaturesDeckRecursively(
    id: string,
    creaturesDeck: CardBooster[] = []
  ): Observable<CardBooster[]> {
    this.loading.next(true);
    return this.http
      .get<BoosterPayload>(`${APP_SETTINGS.MTG_API}/v1/sets/${id}/booster`)
      .pipe(
        map(({ cards }) => cards.filter((c) => c.types.includes('creature'))),
        tap((cards) => creaturesDeck.concat(cards)),
        switchMap(() =>
          creaturesDeck.length >= 30
            ? of(creaturesDeck.slice(0, 30))
            : this.getCreaturesDeckRecursively(id, creaturesDeck)
        ),
        filter(() => creaturesDeck.length === 30),
        tap(() => this.loading.next(false))
      );
  }
}
