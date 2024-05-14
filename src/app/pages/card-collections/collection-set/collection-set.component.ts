import { Component, input } from '@angular/core';
import { CollectionSet } from '../../../model/model';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-collection-set',
  standalone: true,
  imports: [DatePipe, RouterModule, MatButtonModule],
  templateUrl: './collection-set.component.html',
  styleUrl: './collection-set.component.scss',
})
export class CollectionSetComponent {
  collection = input.required<CollectionSet>();
}
