import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgForExampleComponent } from './directives/ngForExample/ng-for-example/ng-for-example.component';
import { ParentToChildComponent } from './directives/passAttributes/parent-to-child/parent-to-child.component';
import { ChildComponent } from './directives/passAttributes/child/child.component';
import { EnumerationsComponent } from './directives/enumerations/enumerations.component';
import { OutputExampleComponent } from './directives/output-example/output-example.component';
import { OutputChildComponent } from './directives/output-example/output-child/output-child.component';
import { SwitchExampleComponent } from './directives/switch-example/switch-example.component';
import { FormExampleComponent } from './directives/form-example/form-example.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NgForExampleComponent,
    ParentToChildComponent,
    ChildComponent,
    EnumerationsComponent,
    OutputExampleComponent,
    OutputChildComponent,
    SwitchExampleComponent,
    FormExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
