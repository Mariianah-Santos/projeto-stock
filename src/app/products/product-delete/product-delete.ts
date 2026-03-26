import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  standalone: false,
  templateUrl: './product-delete.html',
  styleUrl: './product-delete.scss',
})
export class ProductDelete {

  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  
  close() {
    this.closeModal.emit();
  }
}
