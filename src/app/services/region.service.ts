import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  getCountriesByRegion(action: any): Observable<any> {
    return this.http.get<Region>(`https://restcountries.eu/rest/v2/region/${action.payload}`);
  }
}
