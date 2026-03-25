import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-add-modal',
  standalone: false,
  templateUrl: './category-add-modal.html',
  styleUrl: './category-add-modal.scss',
})
export class CategoryAddModal {

  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();


  close() {
    this.closeModal.emit();
  }
}
