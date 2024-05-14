import { Component, input, output, signal } from '@angular/core';
import { CardBooster } from '../../../model/model';
import { CardManaComponent } from '../card-mana/card-mana.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardManaComponent, MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  card = input.required<CardBooster>();
  showSelect = input.required<boolean>();
  undo = output<CardBooster>();
  select = output<CardBooster>();
  selected = signal<boolean>(false);
  processed = signal<boolean>(false);

  undoClick(): void {
    this.selected.set(false);
    this.undo.emit(this.card());
  }

  selectClick(): void {
    this.selected.set(true);
    this.select.emit(this.card());
  }
}
