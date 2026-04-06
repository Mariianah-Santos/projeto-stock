import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { NotificationService } from '../../services/notification-service';
import { Product } from '../../interface/product';
import { Category } from '../../interface/category';
import { CategoryService } from '../../services/category-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  standalone: false,
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.scss',
})
export class ProductEdit {

      constructor(
        private router: Router,
        private productService: ProductService,
        private notificationService: NotificationService,
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef
      ) {}

    product: Product = {
      name: '',
      quantity: 0,
      price: 0,
      dateCreate: new Date()
    };

    user: any;

    categorys: Category[] = [];

    ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');

      const id = this.route.snapshot.paramMap.get('id');

      this.productService.getByIdProduct(Number(id)).subscribe(data => {
        this.product = data;
        this.cdr.detectChanges();
      });

      this.categoryService.getAllCategory().subscribe(data => {
        this.categorys = data;
        this.cdr.detectChanges();
      });
    }

  editProduct() {

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const payload = {
      name: this.product.name,
      price: this.product.price,
      quantity: this.product.quantity,
      categoryId: this.product.category?.id,
      responsibleId: user.id
    };

    this.productService.updateProduct(this.product.id!, payload).subscribe({
      next: (res) => {
        this.notificationService.sucess('Produto editado com sucesso!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.notificationService.error(err.error?.message || 'Erro ao editar produto');
      }
    });
  }

  compareCategory(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
