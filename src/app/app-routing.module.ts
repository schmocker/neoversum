import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProgramComponent } from './program/program.component';
import { ErinnerungenComponent } from './erinnerungen/erinnerungen.component';
import { SponsorenComponent } from './sponsoren/sponsoren.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programm', component: ProgramComponent },
  { path: 'erinnerungen', component: ErinnerungenComponent },
  { path: 'hälfe', component: HelpComponent },
  { path: 'kontakt', component: ImpressumComponent },
  { path: 'sponsoren', component: SponsorenComponent },
  { path: '*', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
