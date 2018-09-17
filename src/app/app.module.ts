import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PaywiselyComponent } from './paywisely/paywisely.component';
import { Multiselect4uComponent } from './multiselect4u/multiselect4u.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HighlightDirective } from "./directives/HighlightDirective.directive";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PaywiselyComponent,
    Multiselect4uComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
