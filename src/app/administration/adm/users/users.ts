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
  searchTerm: string = '';
  isFiltered: boolean = false;
  hasResponsible: boolean = false;

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
      this.responsibles = data;
      this.hasResponsible = data.length > 0;
      this.dataSource.data = data;

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
    })
  }

  filterResponsible() {
    const term = this.searchTerm.toLowerCase();

    if (term.trim() === '') {
      this.dataSource.data = this.responsibles;
      this.isFiltered = false;
    } else {
      this.dataSource.data = this.responsibles.filter(r => {
        return r.name?.toLocaleLowerCase().includes(term);
      });
      this.isFiltered = true;
    }
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
