import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.scss']
})
export class ListSelectComponent {

  constructor() { }

  @Input()
  options: Array<string> = [];
  @Input()
  label: string = '';

  @Output() changed = new EventEmitter<string>();

  onChange(option: string): void {
    this.changed.emit(option);
  }

}
