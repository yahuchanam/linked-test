import { Component, input } from '@angular/core';
import { CollectionSet } from '../../../model/model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-collection-set',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './collection-set.component.html',
  styleUrl: './collection-set.component.scss',
})
export class CollectionSetComponent {
  collection = input.required<CollectionSet>();
}
