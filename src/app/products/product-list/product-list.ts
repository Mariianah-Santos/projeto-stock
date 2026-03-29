import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../services/product-service';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',

})
export class ProductList {

  products: Product[] = [];
  searchTerm: string = '';
  hasProducts: boolean = false;
  isFiltered: boolean = false;

  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {

    this.loadProducts();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // loadProducts() {
  //     this.productService.getAllProduct().subscribe(res => {
  //     this.products = res;
  //   })
  // }

  loadProducts() {
      this.productService.getAllProduct().subscribe(data => {
      this.products = data;
      this.hasProducts = data.length > 0;
      this.dataSource.data = data;
      
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  filterProduct() {
    const term = this.searchTerm.toLowerCase();

    if (term.trim() === '') {
      this.dataSource.data = this.products;
      this.isFiltered = false;
    } else {
      this.dataSource.data = this.products.filter(p => {
        return p.name.toLocaleLowerCase().includes(term);
      });
      this.isFiltered = true;
    }
  }

  open = false;

  closeModal() {
    this.open = false;
  }

  showModal() {
    this.open = true;
  }
}
