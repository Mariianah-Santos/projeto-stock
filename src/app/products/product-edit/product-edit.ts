import { Component } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  standalone: false,
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.scss',
})
export class ProductEdit {

    createDateProduct() {
      let date = new Date();

      let day = String(date.getDate()).padStart(2, '0');
      let month = String(date.getMonth() + 1).padStart(2, '0');
      let year = date.getFullYear();

      return `${day}/${month}/${year}`;
    }
}
