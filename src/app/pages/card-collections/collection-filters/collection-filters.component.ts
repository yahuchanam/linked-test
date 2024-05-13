import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ColletionService } from '../../../services/colletion/colletion.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

type CollectionFilter = {
  block: FormControl<string>;
  name?: FormControl<string | null>;
};

@Component({
  selector: 'app-collection-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './collection-filters.component.html',
  styleUrl: './collection-filters.component.scss',
})
export class CollectionFiltersComponent {
  collectionService = inject(ColletionService);

  blocks = this.collectionService.getBlockFilters();

  form = new FormGroup<CollectionFilter>({
    name: new FormControl(null, {
      nonNullable: false,
      validators: [],
    }),
    block: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
}
