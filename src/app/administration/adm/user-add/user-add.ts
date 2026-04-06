import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Responsavel } from '../../../interface/responsavel';
import { ResponsibleService } from '../../../services/responsible-service';

@Component({
  selector: 'app-user-add',
  standalone: false,
  templateUrl: './user-add.html',
  styleUrl: './user-add.scss',
})
export class UserAdd {

  constructor(private responsibleService: ResponsibleService) {

  }

  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() userAdded = new EventEmitter<void>();

  responsible: Responsavel = {
    name: '',
    password: '',
    email: '',
    telefone: '',
  }

  addResponsible() {
    this.responsibleService.createResponsible(this.responsible).subscribe( {
      next: (res) => {
        console.log("criado com sucesso");
        this.userAdded.emit();
        this.close(); 
      },
      error: (err) => {
        console.log("erro ao criar o usuario", err);
      }
    })
  }


  
  close() {
    this.closeModal.emit();
  }
}
