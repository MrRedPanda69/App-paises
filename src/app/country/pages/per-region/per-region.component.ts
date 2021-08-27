import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-region',
  templateUrl: './per-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PerRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getCSSClass(region: string): string {
    return (region === this.activeRegion) ? 'btn btn-dark' : 'btn btn-outline-dark'
  }

  activateRegion(region: string) {

    if(region === this.activeRegion) {return;}

    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchRegion(region) 
      .subscribe(countries => this.countries = countries);
  }
}
