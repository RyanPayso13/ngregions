import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailsComponent } from './country-details.component';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a details table', () => {
    expect(fixture.debugElement.query(By.css('table'))).toBeDefined();
  });

  it('should render headers', () => {
    let headerValues = ['Name', 'Capital', 'Population', 'Currencies', 'Flag'];
    let headers = fixture.debugElement.queryAll(By.css('th'));
    expect(headers.length).toEqual(5);
    headerValues.forEach((text, index) => expect(headers[index].nativeElement.textContent).toBe(text))
  });

});
