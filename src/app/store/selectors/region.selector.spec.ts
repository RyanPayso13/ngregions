import * as selectors from './region.selector';
import { initialAppState } from '../state/app.state';
import { initialRegionState } from '../state/region.state';

describe('Region selectors', () => {

  const regions = ['europe', 'asia'];

  it('should return the region feature', () => {
    expect(selectors.selectRegionFeature(initialAppState)).toEqual(initialAppState.region);
  });

  it('should return all regions', () => {
    expect(selectors.selectAllRegions.projector(initialRegionState)).toEqual(regions);
  });

});
