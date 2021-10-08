import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WonderWorldComponent } from './wonder-world/wonder-world.component';

@NgModule({
  declarations: [
    AppComponent,
    WonderWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
