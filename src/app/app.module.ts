import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgForExampleComponent } from './directives/ngForExample/ng-for-example/ng-for-example.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NgForExampleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
