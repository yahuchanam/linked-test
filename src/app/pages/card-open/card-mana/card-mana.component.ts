import { Component, input } from '@angular/core';

type ManaType = {
  type: string;
  value: string;
};

const costImages = ['u', 'r', 'b', 'g', 'w'];

@Component({
  selector: 'app-card-mana',
  standalone: true,
  imports: [],
  templateUrl: './card-mana.component.html',
  styleUrl: './card-mana.component.scss',
})
export class CardManaComponent {
  manaCost = input.required<ManaType[], string>({
    transform: (costStr) => {
      const regex = /{([^}]+)}/g;
      const matches = [...costStr.matchAll(regex)];
      const result = matches.map((match) => {
        const typeValue = match[1].toLowerCase();
        return costImages.includes(typeValue)
          ? {
              type: 'image',
              value: `assets/imgs/${typeValue}.png`,
            }
          : {
              type: 'number',
              value: typeValue,
            };
      });
      return result;
    },
  });
}
