import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceInfoComponent } from './components/space-info/space-info.component';
import { HttpClientModule } from '@angular/common/http';
import { CoresInfoComponent } from './components/space-info/cores-info/cores-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceInfoComponent,
    CoresInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
