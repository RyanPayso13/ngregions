import * as fromRegion from './region.reducer';
import { initialRegionState } from '../state/region.state';

describe('Region reducer', () => {

  it('should have initial state', () => {
    expect(fromRegion.reducer(initialRegionState, {type: '@ngrx/store/init'})).toEqual(initialRegionState);
  });

});
