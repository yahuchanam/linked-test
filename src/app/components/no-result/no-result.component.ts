import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-no-result',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './no-result.component.html',
  styleUrl: './no-result.component.scss',
})
export class NoResultComponent {
  icon = input.required<string>();
  title = input.required<string>();
}
