import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../services/product-service';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NotificationService } from '../../services/notification-service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',

})
export class ProductList implements OnInit, OnDestroy {

  products: Product[] = [];
  searchTerm: string = '';
  hasProducts: boolean = false;
  isFiltered: boolean = false;

  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private routerSub!: Subscription;

  constructor(private productService: ProductService, 
    private router: Router,
    private notificationService: NotificationService) {

  }

  isDeleteOpen = false;
  selectedProduct!: Product;

  openDeleteModal(product: Product) {
    this.selectedProduct = product;
    this.isDeleteOpen = true;
  }

  ngOnInit() {

    this.loadProducts();

    this.routerSub = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.loadProducts();
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
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
