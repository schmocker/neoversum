import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TitleComponent} from './title/title.component';
import {HelpComponent} from './help/help.component';
import {FooterComponent} from './footer/footer.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {ProgramComponent} from './program/program.component';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TitleComponent,
    HelpComponent,
    FooterComponent,
    ImpressumComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
