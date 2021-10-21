import { Component, Input } from '@angular/core';

import { RecipeModel } from '@recipe/models';

@Component({
  selector: 'recipe-recipe-card',
  template: `<mat-card class="recipe-card">
    <mat-card-header>
      <span mat-card-title>{{ recipe.title }}</span>
    </mat-card-header>
    <img mat-card-image [src]="recipe.image" alt="recipe-image" />
    <mat-card-content>
      {{ recipe.description }}
    </mat-card-content>
  </mat-card>`,
  styles: [
    `
      .recipe-card {
        height: 100%;
      }
      .recipe-image {
        max-width: 100%;
      }
    `,
  ],
})
export class RecipeCardComponent {
  @Input() recipe!: RecipeModel;
}
