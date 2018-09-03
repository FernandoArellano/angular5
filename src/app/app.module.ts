import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgForExampleComponent } from './directives/ngForExample/ng-for-example/ng-for-example.component';
import { ParentToChildComponent } from './directives/passAttributes/parent-to-child/parent-to-child.component';
import { ChildComponent } from './directives/passAttributes/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NgForExampleComponent,
    ParentToChildComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
