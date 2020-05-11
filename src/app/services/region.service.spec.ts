import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegionService } from './region.service';
import { Region } from '../../models/region.model';

describe('RegionService', () => {
  let service: RegionService;
  let httpTestingController: HttpTestingController;
  const mockRegion: Region = require('../../assets/mock-data/europe.json');;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(RegionService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the countries by region', () => {
    service.getCountriesByRegion('europe').subscribe(region => expect(region).toEqual(mockRegion));
    httpTestingController.expectOne({
      method: 'GET',
      url: `/api/region/europe`
    }).flush(mockRegion);
  });
});
