import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import { ListSelectComponent } from './list-select.component';

describe('ListSelectComponent', () => {
  let component: ListSelectComponent;
  let fixture: ComponentFixture<ListSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a label', () => {
    component.label = 'label';
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css(`${component.label}`));
    expect(label).toBeDefined();
    expect(label.nativeElement.textContent).toBe(`${component.label}:`);
    expect(label.nativeElement.getAttribute('for')).toBe(`${component.label}`);
  });

  it('should render a select', () => {
    component.label = 'label';
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('select'));
    expect(select).toBeDefined();
    expect(select.nativeElement.getAttribute('id')).toBe(`${component.label}`);
  });

  it('should be disabled', () => {
    const select = fixture.debugElement.query(By.css('select'));
    expect(select.nativeElement.getAttribute('disabled')).toBeDefined();
    expect(select.nativeElement.getAttribute('disabled')).toBe('');
  });

  it('should have a default selected option', () => {
    const options = fixture.debugElement.queryAll(By.css('option'));
    expect(options.length).toEqual(1);
    expect(options[0].nativeElement.getAttribute('selected')).toBe('');
    expect(options[0].nativeElement.getAttribute('value')).toBe('');
    expect(options[0].nativeElement.textContent).toBe('Select...');
  });

  it('should list selectable options', () => {
    component.options = ['foo', 'bar'];
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('select'));
    const options = fixture.debugElement.queryAll(By.css('option'));
    expect(select.nativeElement.getAttribute('disabled')).toBeNull();
    expect(options.length).toEqual(3);
    expect(options[1].nativeElement.textContent).toBe(`${component.options[0]}`);
    expect(options[2].nativeElement.textContent).toBe(`${component.options[1]}`);
  });

  it('should emit the option value', () => {
    component.options = ['foo', 'bar'];
    spyOn(component.changed, 'emit');
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('select'));
    select.nativeElement.value = component.options[1];
    select.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.changed.emit).toHaveBeenCalledWith(`${component.options[1]}`);
  });

});
