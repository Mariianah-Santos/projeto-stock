import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResponsibleService } from '../../../services/responsible-service';
import { NotificationService } from '../../../services/notification-service';
import { Responsavel } from '../../../interface/responsavel';

@Component({
  selector: 'app-user-delete',
  standalone: false,
  templateUrl: './user-delete.html',
  styleUrl: './user-delete.scss',
})
export class UserDelete {

  constructor(private responsibleService: ResponsibleService, private notificationService: NotificationService){}

  @Input() responsible!: Responsavel;
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  deletar() {
    this.responsibleService.deleteResponsible(this.responsible.id!).subscribe({
      next: (res) => {
        this.notificationService.sucess("Usuário deletado com sucesso");
        this.close();
      },
      error: (err) => {
        const msg = err.error?.message || err.error || "Erro ao deletar a usuário";
        this.notificationService.error(msg);
      }
    })
  }
  
  close() {
    this.closeModal.emit();
  }
}
