import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PerCountryComponent {
  term: string = '';
  isError: boolean = false;
  country : Country[] = [];

  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}
  
  search(term: string) {
    this.isError = false;
    this.term = term;

    this.countryService.searchCountry(term)
      .subscribe((countries) => {
        return this.country = countries;

      }, (err) => {
        this.isError = true;
        this.country = [];
      });
  }

  suggestions(term: string) {
    this.isError = false;
    this.term = term;
    this.showSuggestions = true;

    this.countryService.searchCountry(term)
      .subscribe( countries => this.suggestedCountries = countries.splice(0, 5),
      (err) => this.suggestedCountries = []
      );
  }

  searchSuggested(term: string) {
    this.search(term);
  }
}
