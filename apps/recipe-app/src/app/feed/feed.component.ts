import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@recipe/models';
import { Observable } from 'rxjs';
import { FeedService } from './feed.service';

@Component({
  templateUrl: './feed.component.html',
  styleUrls: ['feed.component.scss'],
})
export class FeedComponent implements OnInit {
  recipes$ = new Observable<RecipeModel[]>();

  constructor(private _feedService: FeedService) {}

  ngOnInit(): void {
    this.recipes$ = this._feedService.getRecipes();
  }
}
