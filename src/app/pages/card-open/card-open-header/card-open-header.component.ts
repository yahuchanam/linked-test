import { Component } from '@angular/core';
import { LogoComponent } from '../../../components/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-open-header',
  standalone: true,
  imports: [LogoComponent, MatButtonModule, RouterModule],
  template: `
    <app-logo></app-logo>
    <a mat-stroked-button [routerLink]="['/search']"> Voltar para colleções </a>
  `,
  styleUrl: './card-open-header.component.scss',
})
export class CardOpenHeaderComponent {}
