import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoldenLayoutAngularModule } from 'projects/golden-layout-angular/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoldenLayoutAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
