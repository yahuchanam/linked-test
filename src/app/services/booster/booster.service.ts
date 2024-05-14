import { Injectable } from '@angular/core';
import { HttpDefaultService } from '../http-default/http-default.service';
import {
  Observable,
  asapScheduler,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { BoosterPayload, CardBooster } from '../../model/model';
import { APP_SETTINGS } from '../../app.settings';
import { boosterMock } from '../../mocks/booster.mock';

@Injectable({
  providedIn: 'root',
})
export class BoosterService extends HttpDefaultService {
  constructor() {
    super();
  }

  retriveCreatureDeck(id: string | undefined): Observable<CardBooster[]> {
    if (id === undefined) return of([]);

    return of(boosterMock);
    // return this.getCreaturesDeckRecursively(id);
  }

  private getCreaturesDeckRecursively(
    id: string,
    creaturesDeck: CardBooster[] = []
  ): Observable<CardBooster[]> {
    asapScheduler.schedule(() => this.loading.next(true));

    return this.http
      .get<BoosterPayload>(`${APP_SETTINGS.MTG_API}/v1/sets/${id}/booster`)
      .pipe(
        map(({ cards }) => cards.filter((c) => c.types.includes('Creature'))),
        map((cards) => creaturesDeck.concat(cards)),
        tap((deck) => console.log(deck.length)),
        switchMap((deck) =>
          deck.length >= 30
            ? of(deck.slice(0, 30))
            : this.getCreaturesDeckRecursively(id, deck)
        ),
        filter((deck) => deck.length === 30),
        tap(() => this.loading.next(false)),
        tap((deck) => console.log(deck))
      );
  }
}
