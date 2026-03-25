import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.html',
  styleUrl: './product-add.scss',
})
export class ProductAdd {


  createDateProduct() {
    let date = new Date();

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
