import { Component } from '@angular/core';
import { ResponsibleService } from '../../../services/responsible-service';
import { Responsavel } from '../../../interface/responsavel';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface DropdownItem {
  label: string;
  icon?: string;
  action?: () => void;
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

  selectedUser!: Responsavel;

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

  // perfilItems(responsible: Responsavel): DropdownItem[]  [
  //   { label: 'Editar', icon: 'edit', action: () => this.openDeleteUser(responsible)},
  //   { label: 'Deleta', icon: 'delete'},
  //   // { label: 'Desativa', icon: 'check'}
  // ];

  perfilItems(responsible: Responsavel): DropdownItem[] {
    return [
      { label: 'Editar', icon: 'edit', action: () => this.openEditUser(responsible)},
      { label: 'Deletar', icon: 'delete', action: () => this.openDeleteUser(responsible) },
    ];
  }

  open = false;
  openEdit = false;
  dropdownOpenImg = false;
  openDropdownIndex: number | null = null;
  isDeleteUser = false;
  

  // toggleDropdownImg() {
  //   this.dropdownOpenImg = !this.dropdownOpenImg;
  // }
  toggleDropdown(index: number) {
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
  }

  openDeleteUser(responsible: Responsavel) {
    this.selectedUser = responsible;
    this.isDeleteUser = true;
  }

  onDropdownItemClicked(item: DropdownItem, responsible: Responsavel) {
    if (item.action) {
      item.action();
    }
    // Fechar o dropdown após clicar
    this.openDropdownIndex = null;
  }

  closeDeleteModal() {
    this.isDeleteUser = false;
    // Recarregar a lista após deletar
    this.showListResponsible();
  }

  closeEditModal() {
    this.openEdit = false;
    this.showListResponsible();
  }

  openEditUser(responsible: Responsavel) {
    this.selectedUser = responsible;
    this.openEdit = true;
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
