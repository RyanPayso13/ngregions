import { RegionActions, getCountriesByRegion } from "./region.actions";

describe('Region Actions', () => {

  it(`should create ${RegionActions.GetCountriesByRegion}`, () => {
    const payload = {payload: 'asia'};
    const action = getCountriesByRegion(payload);
    expect(action).toEqual({ payload: 'asia', type: RegionActions.GetCountriesByRegion });
  });

});
