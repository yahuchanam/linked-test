import { Component, input, output, signal } from '@angular/core';
import { CardBooster } from '../../../model/model';
import { CardManaComponent } from '../card-mana/card-mana.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const colors = new Map<string, string>([
  ['B', '#000'],
  ['G', '#0F0'],
  ['R', '#F00'],
  ['U', '#00F'],
  ['W', '#FFF'],
]);
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardManaComponent, MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  card = input.required<CardBooster, CardBooster>({
    transform: (card) => {
      if (!card.colorIdentity) {
        return card;
      }

      if (typeof card.colorIdentity === 'string') {
        this.configColorIdentityStyle([card.colorIdentity, card.colorIdentity]);
        return card;
      }

      if ('length' in card.colorIdentity) {
        this.configColorIdentityStyle(card.colorIdentity);
        return card;
      }

      return card;
    },
  });
  showSelect = input.required<boolean>();
  undo = output<CardBooster>();
  select = output<CardBooster>();
  selected = signal<boolean>(false);
  replaced = input.required<boolean>();
  colorIdentityStyle = signal({ 'box-shadow': '' });

  undoClick(): void {
    this.selected.set(false);
    this.undo.emit(this.card());
  }

  selectClick(): void {
    this.selected.set(true);
    this.select.emit(this.card());
  }

  configColorIdentityStyle(colorIdentity: string[]): void {
    const efeitos = [
      '0px -1px 5px',
      '1px 0px 5px',
      '0px 2px 5px',
      '-1px 0px 5px',
      '2px 2px 5px',
    ];

    const boxShadowInnerShadow: string[] = [];
    colorIdentity.forEach((color, index) => {
      if (colors.has(color)) {
        const cor = colors.get(color);
        boxShadowInnerShadow.push(`${efeitos[index]} ${cor}`);
      }
    });

    this.colorIdentityStyle.set({
      'box-shadow': boxShadowInnerShadow.join(', '),
    });
  }
}
