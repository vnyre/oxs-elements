import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentViewComponent } from './document-view/document-view.component';
import { WorkbasketViewComponent } from './workbasket-view/workbasket-view.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    DocumentViewComponent,
    WorkbasketViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    DocumentViewComponent,
    WorkbasketViewComponent
  ]


})
export class OxsElementsModule {
  constructor(private injector: Injector) {

    const customDocumentView = createCustomElement(DocumentViewComponent, {injector});
    customElements.define('oxs-doc-view', customDocumentView);

    const customWorkbasketView = createCustomElement(WorkbasketViewComponent, {injector});
    customElements.define('oxs-wb-view', customWorkbasketView);


  }


  ngDoBootstrap() {}



}
