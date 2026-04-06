import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Category } from '../../../interface/category';
import { CategoryService } from '../../../services/category-service';
import { NotificationService } from '../../../services/notification-service';

@Component({
  selector: 'app-category-delete',
  standalone: false,
  templateUrl: './category-delete.html',
  styleUrl: './category-delete.scss',
})
export class CategoryDelete {

  constructor(private categoryService: CategoryService, private notificationService: NotificationService) {}

  @Input() isOpen = false;
  @Input() category!: Category;
  @Output() closeModal = new EventEmitter<void>();
  @Output() categoryDeleted = new EventEmitter<void>();
  
  close() {
    this.closeModal.emit();
  }

  deleteCategory() {
    this.categoryService.deleteCategpry(this.category.id!).subscribe({
      next: (res: any) => {
        this.notificationService.sucess("Deletado com sucesso");
        this.categoryDeleted.emit();
        this.close();
      },
      error: (err: any) => {
        const msg = err.error?.message || err.error || "Erro ao deletar a categoria";
        this.notificationService.error(msg);
      }
    });
  }
}
