import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProgramComponent } from './program/program.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ErinnerungenComponent } from './erinnerungen/erinnerungen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SponsorenComponent } from './sponsoren/sponsoren.component';
import { SponsorCardComponent } from './sponsoren/sponsor-card/sponsor-card.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';

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
    ProgramComponent,
    ErinnerungenComponent,
    SponsorenComponent,
    SponsorCardComponent,
    AktuellesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, NgbModule],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
