import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.scss']
})
export class ListSelectComponent implements OnInit {

  constructor() { }

  @Input()
  options: Array<string> = [];

  @Output() changed = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onChange(option: string): void {
    this.changed.emit(option);
  }

}
