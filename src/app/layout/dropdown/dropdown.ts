import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface DropdownItem {
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: false,
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown {

  @Input() items: DropdownItem[] = [];
  @Input() isOpen = false;

  @Output() itemClicked = new EventEmitter<DropdownItem>();

  clickItem(item: DropdownItem) {
    this.itemClicked.emit(item);
  }
}
