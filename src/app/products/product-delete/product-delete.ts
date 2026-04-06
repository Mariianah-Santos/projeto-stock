import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../services/product-service';
import { NotificationService } from '../../services/notification-service';

@Component({
  selector: 'app-product-delete',
  standalone: false,
  templateUrl: './product-delete.html',
  styleUrl: './product-delete.scss',
})
export class ProductDelete {

  constructor(private productService: ProductService, private notificationService: NotificationService) {}

  @Input() isOpen = false;
  @Input() product!: Product;
  @Output() closeModal = new EventEmitter<void>();
  @Output() productDeleted = new EventEmitter<void>();
  
  close() {
    this.closeModal.emit();
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id!).subscribe({
      next: (res) => {
        this.notificationService.sucess("Deletado com sucesso");
        this.productDeleted.emit();
        this.close();
      },
      error: (err) => {
        this.notificationService.error("Erro ao deletar o produto");
      }
    });
  }
}
