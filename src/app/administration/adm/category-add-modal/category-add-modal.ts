import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { Category } from '../../../interface/category';
import { NotificationService } from '../../../services/notification-service';

@Component({
  selector: 'app-category-add-modal',
  standalone: false,
  templateUrl: './category-add-modal.html',
  styleUrl: './category-add-modal.scss',
})
export class CategoryAddModal {

  constructor(private categoryService: CategoryService, private notificationService: NotificationService){}

  category: Category = {
    name: ''
  }

  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() categoryEmit = new EventEmitter<void>();

  addCategory() {
    this.categoryService.createCategory(this.category).subscribe({
      next: (res) => {
        this.notificationService.sucess("Categoria criada com sucesso");
        this.categoryEmit.emit();
        this.close();
      },
      error: (err) => {
        const msg = err.error?.message || err.error || "Erro ao criar a categoria";
        this.notificationService.error(msg);
      }

    })
  }

  close() {
    this.closeModal.emit();
  }
}
