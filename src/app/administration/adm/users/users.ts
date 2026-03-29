import { Component } from '@angular/core';
import { ResponsibleService } from '../../../services/responsible-service';
import { Responsavel } from '../../../interface/responsavel';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

  responsibles: Responsavel[] = [];

  dataSource = new MatTableDataSource<Responsavel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private responsibleService: ResponsibleService) {

  }

  ngOnInit() {
    this.showListResponsible();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showListResponsible() {
    this.responsibleService.getAllResponsible().subscribe(data => {
      this.dataSource.data = data;

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
    })
  }

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
