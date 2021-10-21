import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed.component';

const ROUTES: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class FeedRoutesModule {}
