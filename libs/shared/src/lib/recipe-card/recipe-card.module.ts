import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { RecipeCardComponent } from './recipe-card.component';

@NgModule({
  declarations: [RecipeCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [RecipeCardComponent],
})
export class RecipeCardModule {}
