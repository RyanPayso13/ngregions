import { Component, Input } from '@angular/core';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-details-ui',
  templateUrl: './details-ui.component.html',
  styleUrls: ['./details-ui.component.scss']
})
export class DetailsUiComponent {

  constructor() { }

  @Input()
  country: Country = null;

}
