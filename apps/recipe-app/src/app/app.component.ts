import { Component } from '@angular/core';

@Component({
  selector: 'recipe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  handleClick(): void {
    console.log('Button clicked!');
  }
}
