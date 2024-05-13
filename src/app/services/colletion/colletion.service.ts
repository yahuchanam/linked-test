import { Injectable } from '@angular/core';
import { BLOCK_FILTERS } from '../../mocks/block-filters.mock';

@Injectable({
  providedIn: 'root',
})
export class ColletionService {
  constructor() {}

  getBlockFilters(): string[] {
    return BLOCK_FILTERS;
  }
}
