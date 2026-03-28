import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-add',
  standalone: false,
  templateUrl: './user-add.html',
  styleUrl: './user-add.scss',
})
export class UserAdd {

  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  
  close() {
    this.closeModal.emit();
  }
}
