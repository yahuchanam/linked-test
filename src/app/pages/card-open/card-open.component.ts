import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { catchError, map, tap, throwError } from 'rxjs';
import { CardOpenHeaderComponent } from './card-open-header/card-open-header.component';
import { BoosterService } from '../../services/booster/booster.service';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardBooster } from '../../model/model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-open',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    CardOpenHeaderComponent,
    CardComponent,
  ],
  templateUrl: './card-open.component.html',
  styleUrl: './card-open.component.scss',
})
export class CardOpenComponent {
  route = inject(ActivatedRoute);
  boosterService = inject(BoosterService);
  $loading = toSignal<boolean>(this.boosterService.loading);
  $boosterId = toSignal<string>(
    this.route.params.pipe(map((p) => p['id'] as string))
  );

  apiError = signal(false);

  $creatureDeck = computed(() =>
    this.replaceCards().length > 0
      ? this.boosterService.replaceCards(this.$boosterId(), this.replaceCards())
      : this.boosterService.retriveCreatureDeck(this.$boosterId()).pipe(
          catchError(({ error, status }) => {
            this.apiError.set(true);
            return throwError(() => error);
          })
        )
  );

  selectedCard = signal<CardBooster[]>([]);
  showSelect = signal<boolean>(true);
  isReplacedCards = signal<boolean>(false);
  replaceCards = signal<CardBooster[]>([]);

  addSelectList(card: CardBooster): void {
    this.selectedCard.update((selected) => [...selected, card]);
    if (this.selectedCard().length === 5) {
      this.showSelect.set(false);
    }
  }

  removeSelectList(card: CardBooster): void {
    this.selectedCard.update((selected) => {
      const index = selected.indexOf(card);
      selected.splice(index, 1);
      return selected;
    });
    this.showSelect.set(true);
  }

  replaceSelectedCards(): void {
    this.replaceCards.set(this.selectedCard());
    this.isReplacedCards.set(true);
  }
}
