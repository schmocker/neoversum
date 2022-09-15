import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HelpComponent} from "./help/help.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import {ProgramComponent} from "./program/program.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "programm", component: ProgramComponent},
  {path: "hälfe", component: HelpComponent},
  {path: "kontakt", component: ImpressumComponent},
  {path: "*", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
