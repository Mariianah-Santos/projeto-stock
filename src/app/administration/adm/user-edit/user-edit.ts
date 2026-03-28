import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  standalone: false,
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.scss',
})
export class UserEdit {

  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

}
