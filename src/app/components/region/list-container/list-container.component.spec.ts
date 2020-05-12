import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListContainerComponent } from './list-container.component';

describe('ListContainerComponent', () => {
  let component: CountryListContainerComponent;
  let fixture: ComponentFixture<CountryListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
