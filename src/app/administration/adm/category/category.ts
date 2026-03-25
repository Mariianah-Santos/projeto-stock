import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {

  constructor() {

  }

  open = false;

  showModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }
}
