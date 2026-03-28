import { Component } from '@angular/core';

export interface DropdownItem {
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {

  perfilItems: DropdownItem[] = [
    { label: 'Editar', icon: 'edit' },
    { label: 'Deleta', icon: 'delete'},
    { label: 'Desativa', icon: 'check'}
  ];

  open = false;
  openEdit = false;
  dropdownOpenImg = false;
  toggleDropdownImg() {
    this.dropdownOpenImg = !this.dropdownOpenImg;
  }

  showModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }

  closeModalEdit() {
    this.openEdit = false;
  }

  showModalEdit() {
    this.openEdit = true;
  }
}
