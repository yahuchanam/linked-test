import { Injectable } from '@angular/core';
import { HttpDefaultService } from '../http-default/http-default.service';
import {
  Observable,
  asapScheduler,
  catchError,
  filter,
  map,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { BoosterPayload, CardBooster } from '../../model/model';
import { APP_SETTINGS } from '../../app.settings';
import { boosterMock } from '../../mocks/booster.mock';

@Injectable({
  providedIn: 'root',
})
export class BoosterService extends HttpDefaultService {
  cachedDeck: CardBooster[] = [];

  constructor() {
    super();
  }

  retriveCreatureDeck(id: string | undefined): Observable<CardBooster[]> {
    if (id === undefined) return of([]);
    this.cachedDeck = [];
    return this.getCreaturesDeckRecursively(id);
  }

  replaceCards(
    id: string | undefined,
    cardsToReplace: CardBooster[]
  ): Observable<CardBooster[]> {
    if (id === undefined) return of([]);
    const deck = this.cachedDeck.filter((c) => !cardsToReplace.includes(c));
    return this.getCreaturesDeckRecursively(id, deck);
  }

  private getCreaturesDeckRecursively(
    id: string,
    creaturesDeck: CardBooster[] = []
  ): Observable<CardBooster[]> {
    asapScheduler.schedule(() => this.loading.next(true));

    return this.http
      .get<BoosterPayload>(`${APP_SETTINGS.MTG_API}/v1/sets/${id}/booster`)
      .pipe(
        catchError(({ response, status }) => {
          if (status !== 200) {
            return throwError(() => ({
              status,
              error: `Erro ao recuperar o booster ${id}.`,
            }));
          } else {
            return of(response);
          }
        }),
        map(({ cards }: BoosterPayload) =>
          cards.filter((c) => c.types.includes('Creature'))
        ),
        map((cards) => creaturesDeck.concat(cards)),
        tap((deck) => console.log(deck.length)),
        switchMap((deck) =>
          deck.length >= 30
            ? of(deck.slice(0, 30))
            : this.getCreaturesDeckRecursively(id, deck)
        ),
        filter((deck) => deck.length === 30),
        tap((deck) => (this.cachedDeck = deck)),
        tap(() => this.loading.next(false))
      );
  }
}
