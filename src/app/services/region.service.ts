import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  getCountriesByRegion(region: String): Observable<any> {
    return this.http.get<Region>(`/api/region/${region}`);
  }
}
