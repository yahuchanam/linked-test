import { Component } from '@angular/core';
import { CollectionFiltersComponent } from './collection-filters/collection-filters.component';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-card-collections',
  standalone: true,
  imports: [CollectionFiltersComponent, MatDividerModule],
  templateUrl: './card-collections.component.html',
  styleUrl: './card-collections.component.scss',
})
export class CardCollectionsComponent {}
