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
import {BasicService} from "./services/basicService";
import { TestServicesComponent } from './directives/test-services/test-services.component';
import {HttpService} from "./services/httpService";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { ObserversExampleComponent } from './directives/observers-example/observers-example.component';

const appRoutes: Routes = [
  {path: 'ngForExample/:param', component: NgForExampleComponent},
  {path: 'enumerations', component: EnumerationsComponent},
  {path: 'output', component: OutputExampleComponent},
  {path: 'services', component: TestServicesComponent},
];



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
    TestServicesComponent,
    ObserversExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    BasicService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
