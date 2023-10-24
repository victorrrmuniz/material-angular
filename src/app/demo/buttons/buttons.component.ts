import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
      <mat-icon>face</mat-icon>
      Click me
    </button>

    <mat-checkbox class="example-margin">Check me</mat-checkbox>>
  `,
  styles: [
  ]
})
export class ButtonsComponent {

}
