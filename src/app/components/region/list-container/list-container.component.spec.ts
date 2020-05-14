import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionListContainerComponent } from './list-container.component';

describe('ListContainerComponent', () => {
  let component: RegionListContainerComponent;
  let fixture: ComponentFixture<RegionListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
