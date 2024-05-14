import { Component, inject, output } from '@angular/core';
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
import { TextValidators } from '../../../validators/text.validator';
import { CollectionFilter } from '../../../model/model';
import { LogoComponent } from '../../../components/logo/logo.component';

type CollectionFilterForm = {
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
    LogoComponent,
  ],
  templateUrl: './collection-filters.component.html',
  styleUrl: './collection-filters.component.scss',
})
export class CollectionFiltersComponent {
  collectionService = inject(ColletionService);

  blocks = this.collectionService.getBlockFilters();

  form = new FormGroup<CollectionFilterForm>({
    name: new FormControl(null, {
      nonNullable: false,
      validators: [TextValidators.withoutWhiteSpace],
    }),
    block: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  filters = output<CollectionFilter>();
}
