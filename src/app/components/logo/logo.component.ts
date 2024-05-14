import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  template: '<img src="assets/imgs/logo.png" class="logo"/>',
  styles: `
    :host {
      align-self: center;
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        margin-bottom: 1rem;
      }
    }
    .logo {
      height: 56px;
    }
  `,
})
export class LogoComponent {}
