import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DetailsContainerComponent } from './components/country/details-container/details-container.component';
import { DetailsUiComponent } from './components/country/details-ui/details-ui.component';

xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DetailsUiComponent,
        DetailsContainerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
