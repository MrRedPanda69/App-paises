import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { PerRegionComponent } from './pages/per-region/per-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { Error404Component } from './pages/error404/error404.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CapitalTableComponent } from './components/capital-table/capital-table.component';



@NgModule({
  declarations: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    SeeCountryComponent,
    Error404Component,
    PaisTablaComponent,
    CountryInputComponent,
    CapitalTableComponent
  ],
  exports: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
