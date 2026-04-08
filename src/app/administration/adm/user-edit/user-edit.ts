import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Responsavel } from '../../../interface/responsavel';
import { ResponsibleService } from '../../../services/responsible-service';
import { NotificationService } from '../../../services/notification-service';

@Component({
  selector: 'app-user-edit',
  standalone: false,
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.scss',
})
export class UserEdit {

  constructor(private responsibleService: ResponsibleService, private notificationService: NotificationService){}

  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Input() responsible!: Responsavel;

  close() {
    this.closeModal.emit();
  }

  save() {
    this.responsibleService.updateResponsible(this.responsible.id!, this.responsible).subscribe({
      next: (res) => {
        this.notificationService.sucess("Usuário editado com sucesso");
        this.close();
      },
      error: (err) => {
        const msg = err.error?.message || err.error || "Erro ao editar o usuário";
        this.notificationService.error(msg);
      }
    })
  }

}
