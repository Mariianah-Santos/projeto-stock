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
  searchTerm: string = '';
  hasCategory: boolean = false;
  isFiltered: boolean = false;

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
      this.categorys = data;
      this.hasCategory = data.length > 0; 
      this.dataSource.data = data;

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
    })
  }

  filterCategory() {
    const term = this.searchTerm.toLocaleLowerCase();

    if (term.trim() === '') {
      this.dataSource.data = this.categorys;
      this.isFiltered = false;
    } else {
      this.dataSource.data = this.categorys.filter(r => {
        return r.name.toLocaleLowerCase().includes(term);
      });
      this.isFiltered = true;
    }
  }

  open = false;

  showModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }
}
