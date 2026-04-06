import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../interface/product';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category-service';
import { Category } from '../../interface/category';
import { NotificationService } from '../../services/notification-service';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.html',
  styleUrl: './product-add.scss',
})
export class ProductAdd {

  constructor(private productService: ProductService, 
    private router: Router, 
    private categoryService: CategoryService,
    private notificationService: NotificationService) {

  }

  categorys: Category[] = [];
  user: any;

  product: Product = {
        name: '',
        quantity: 0,
        price: 0,
        dateCreate: new Date,
  }

  ngOnInit() {
    this.categoryList();
    this.product.dateCreate = new Date();
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
  
  addProduct() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const payload = {
      name: this.product.name,
      price: this.product.price,
      quantity: this.product.quantity,
      dateCreate: this.product.dateCreate,
      categoryId: this.product.category?.id,
      responsibleId: user.id
    };

    this.productService.createProduct(payload).subscribe({
      next: (res) => {
        this.notificationService.sucess("Produto Criado com sucesso");
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.notificationService.error("Houver um erro ao criar o produto");
      }
    });
  }
  // addProduct() {

  //   const user = JSON.parse(localStorage.getItem('user') || '{}');

  //   this.product.responsible = {
  //     id: user.id
  //   };

  //   this.productService.createProduct(this.product).subscribe({
  //     next: (res) => {
  //       console.log("criado com sucesso", res);
  //       this.router.navigate(['/']);
  //     },
  //     error: (err) => {
  //       console.error(err);
  //       alert('Erro ao salvar: ' + (err.error?.message || err.message));
  //     }
  //   });
  // }

  categoryList() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categorys = res;
    })
  }
}
