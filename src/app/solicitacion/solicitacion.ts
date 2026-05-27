import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interface/product';
import { Solicitation } from '../interface/Solicitation';
import { SolicitacionService } from '../services/solicitacion-service';
import { Loginservice } from '../services/loginservice';
import { NotificationService } from '../services/notification-service';

@Component({
  selector: 'app-solicitacion',
  standalone: false,
  templateUrl: './solicitacion.html',
  styleUrl: './solicitacion.scss',
})
export class Solicitacion {

  @Input() isOpen = false;
  @Input() product?: Product;
  @Output() closeModal = new EventEmitter<void>();

  quantity = 1;
  submitting = false;

  constructor(
    private solicitacionService: SolicitacionService,
    private loginService: Loginservice,
    private notificationService: NotificationService
  ) {}

  close() {
    this.closeModal.emit();
  }

  submitSolicitation() {
    if (!this.product) {
      this.notificationService.error('Produto não selecionado');
      return;
    }

    const user = this.loginService.getUser();
    if (!user) {
      this.notificationService.error('Usuário não está autenticado');
      return;
    }

    if (this.quantity <= 0) {
      this.notificationService.error('Informe uma quantidade válida');
      return;
    }

     if (this.quantity > this.product?.quantity) {
          this.notificationService.error("A quantidade informada excede o estoque disponível");
          return;
      }

    const solicitation = {
      responsible: { id: user.id },
      product: { id: this.product.id },
      quantity: this.quantity,
    };

    this.submitting = true;
    this.solicitacionService.createSolicitation(solicitation).subscribe({
      next: () => {
        this.notificationService.sucess('Solicitação enviada com sucesso');
        this.quantity = 1;
        this.submitting = false;
        this.close();
      },
      error: (err) => {
        const message = err.error?.message || 'Erro ao enviar solicitação';
        this.notificationService.error(message);
        this.submitting = false;
      }
    });
  }
}
