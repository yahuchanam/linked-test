import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CardOpenHeaderComponent } from './card-open-header/card-open-header.component';

@Component({
  selector: 'app-card-open',
  standalone: true,
  imports: [MatDividerModule, CardOpenHeaderComponent],
  templateUrl: './card-open.component.html',
  styleUrl: './card-open.component.scss',
})
export class CardOpenComponent {}
