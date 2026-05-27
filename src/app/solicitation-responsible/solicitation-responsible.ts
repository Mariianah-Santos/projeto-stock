import { Component } from '@angular/core';
import { Solicitation } from '../interface/Solicitation';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MovementType } from '../interface/MovementType';
import { SolicitacionService } from '../services/solicitacion-service';
import { Router } from '@angular/router';
import { Responsavel } from '../interface/responsavel';
import { Loginservice } from '../services/loginservice';

@Component({
  selector: 'app-solicitation-responsible',
  standalone: false,
  templateUrl: './solicitation-responsible.html',
  styleUrl: './solicitation-responsible.scss',
})
export class SolicitationResponsible {

  constructor(private solicitationService: SolicitacionService, private router: Router,
    private loginService: Loginservice
  ) {}

  searchTerm: string = '';
  isFiltered: boolean = false;
  solicitations: Solicitation[] = [];
  hasProducts: boolean = false;

  dataSource = new MatTableDataSource<Solicitation>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.solicitationList();
  }


    solicitationList() {

      const user = this.loginService.getUser();
      
      if (!user?.id) return;
      this.solicitationService.getByResponsible(user.id).subscribe(data => {
        this.solicitations = data;
        this.hasProducts = data.length > 0;
        this.dataSource.data = data;

        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        });
      })
    }
    filterProduct() {
      const term = this.searchTerm.toLowerCase();
  
      if (term.trim() === '') {
        this.dataSource.data = this.solicitations;
        this.isFiltered = false;
      } else {
        this.dataSource.data = this.solicitations.filter(p => {
          return p.product.name.toLocaleLowerCase().includes(term);
        });
        this.isFiltered = true;
      }
    }
      getStatusLabel(status?: MovementType): string {
        if (!status) return '';
        const labels: { [key: string]: string } = {
          'PENDING': 'Pendente',
          'APPROVED': 'Aprovado',
          'REJECTED': 'Recusado'
        };
        return labels[status] || status;
      }
  
      getStatusClass(status?: MovementType): string {
        if (!status) return '';
        const classes: { [key: string]: string } = {
          'PENDING': 'status-pending',
          'APPROVED': 'status-approved',
          'REJECTED': 'status-refused'
        };
        return classes[status] || '';
      }

}
