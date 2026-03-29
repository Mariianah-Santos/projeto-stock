import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { Category } from '../../../interface/category';

import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.html',
  styleUrl: './category-list.scss',
})
export class CategoryList {

  categorys: Category[] = [];

  dataSource = new MatTableDataSource<Category>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private categoryService:  CategoryService) {

  }

  ngOnInit() {
    this.categoryList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  categoryList() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.dataSource.data = data;

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
    })
  }

  open = false;

  showModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }
}
