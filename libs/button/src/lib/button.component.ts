import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'recipe-button',
  template: `<button
    mat-raised-button
    [color]="color"
    (click)="clickEvent.emit()"
  >
    <ng-content></ng-content>
  </button>`,
})
export class ButtonComponent {
  @Input() color = 'primary';
  @Output() clickEvent = new EventEmitter<void>();
}
