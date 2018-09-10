import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExperiencesModule } from './experiences/experiences.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),BrowserModule, ExperiencesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
