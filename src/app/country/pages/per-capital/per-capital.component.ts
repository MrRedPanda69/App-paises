import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
  styles: [
  ]
})
export class PerCapitalComponent {

  term: string = '';
  isError: boolean = false;
  country : Country[] = [];
  
  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.isError = false;
    this.term = term;

    this.countryService.searchCapital(term)
      .subscribe((countries) => {
        return this.country = countries;

      }, () => {
        this.isError = true;
        this.country = [];
      });
  }
}
