import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRoutesModule } from './feed.routes.module';
import { FeedService } from './feed.service';

import { RecipeCardModule } from '@recipe/shared';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, FeedRoutesModule, RecipeCardModule],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
