import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Category } from '../../../interface/category';
import { CategoryService } from '../../../services/category-service';
import { NotificationService } from '../../../services/notification-service';

@Component({
  selector: 'app-category-edit',
  standalone: false,
  templateUrl: './category-edit.html',
  styleUrl: './category-edit.scss',
})
export class CategoryEdit implements OnChanges {

  constructor(private categoryService: CategoryService, private notificationService: NotificationService) {}

  @Input() category!: Category;
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  categoryEdit!: Category;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category'] && this.category) {
      this.categoryEdit = { ...this.category };
    }
  }

  close() {
    this.closeModal.emit();
  }

  save() {
    
    this.category = { ...this.categoryEdit };
    
    this.categoryService.updateCategory(this.category.id!, this.category).subscribe( {
      next: (res) => {
        this.notificationService.sucess("Categoria editado com sucesso");
        this.close();
      },
      error: (err) => {
        const msg = err.error?.message || err.error || "Erro ao editar a categoria";
        this.notificationService.error(msg);
      }
    })
  }
}
