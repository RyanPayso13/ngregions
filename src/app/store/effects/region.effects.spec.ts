import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, Observable } from 'rxjs';

import { RegionEffects } from './region.effects';
import { RegionActions } from '../actions/region.actions';
import { CountryActions } from '../actions/country.actions';
import { RegionService } from '../../services/region.service';

describe('Region Effects', () => {
  let service: RegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RegionService,
          useValue: jasmine.createSpyObj('regionService', ['getCountriesByRegion'])
        }
      ]
    });

  });

});
