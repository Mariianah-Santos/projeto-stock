import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../interface/product';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category-service';
import { Category } from '../../interface/category';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.html',
  styleUrl: './product-add.scss',
})
export class ProductAdd {

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) {

  }

  categorys: Category[] = [];

  product: Product = {
        name: '',
        quantity: 0,
        price: 0,
        dateCreate: new Date,
  }

  ngOnInit() {
    this.categoryList();
    this.product.dateCreate = new Date();
  }

  addProduct() {
    return this.productService.createProduct(this.product).subscribe( {
      next: (res) => {
          console.log("criado com sucesso", res);
          this.router.navigate(['/']);
      },
      error: (err) => {
        alert('Erro ao salvar: ' + err.message);
      }
    })
  }

  categoryList() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categorys = res;
    })
  }
}
