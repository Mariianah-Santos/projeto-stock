import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
export class CategoryList implements OnInit, OnDestroy {

  categorys: Category[] = [];
  searchTerm: string = '';
  hasCategory: boolean = false;
  isFiltered: boolean = false;

  dataSource = new MatTableDataSource<Category>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private categoryService:  CategoryService, private cdr: ChangeDetectorRef) {

  }

  selectedCategory!: Category;
  isDeleteOpen = false;

  ngOnInit() {
    this.categoryList();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDeleteModal(category: Category) {
    this.selectedCategory = category;
    this.isDeleteOpen = true;
  }

  categoryList() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categorys = data;
      this.hasCategory = data.length > 0; 
      this.dataSource.data = data;
      this.cdr.detectChanges();
      
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
