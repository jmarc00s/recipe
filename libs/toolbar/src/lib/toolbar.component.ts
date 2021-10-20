import { Component, Input } from '@angular/core';

@Component({
  selector: 'recipe-toolbar',
  template: `<mat-toolbar color="primary">
    <span>{{ titulo }}</span>
    <span class="spacer"></span>
    <button mat-icon-button><mat-icon>menu</mat-icon></button>
  </mat-toolbar>`,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class ToolbarComponent {
  @Input() titulo!: string;
}
