import { Component, computed, inject, signal } from '@angular/core';
import { CollectionFiltersComponent } from './collection-filters/collection-filters.component';
import { MatDividerModule } from '@angular/material/divider';
import { ColletionService } from '../../services/colletion/colletion.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NoResultComponent } from '../../components/no-result/no-result.component';
import { CollectionFilter } from '../../model/model';
import { CollectionSetComponent } from './collection-set/collection-set.component';

@Component({
  selector: 'app-card-collections',
  standalone: true,
  imports: [
    CommonModule,
    CollectionFiltersComponent,
    MatDividerModule,
    MatIconModule,
    NoResultComponent,
    CollectionSetComponent,
  ],
  templateUrl: './card-collections.component.html',
  styleUrl: './card-collections.component.scss',
})
export class CardCollectionsComponent {
  collectionService = inject(ColletionService);

  $seachFilters = signal<CollectionFilter>({
    name: null,
    block: null,
  });

  $collections = computed(() => {
    return this.collectionService.loadSets(this.$seachFilters());
  });
}
