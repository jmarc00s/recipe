import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToolbarModule } from '@recipe/toolbar';
import { ButtonModule } from '@recipe/button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToolbarModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
