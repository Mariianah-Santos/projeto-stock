import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}

  sucess(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 5000,
      panelClass: ['snack-success'],
      verticalPosition: 'top',
      horizontalPosition: 'left'
    });
  }

  error(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 5000,
      panelClass: ['snack-error'],
      verticalPosition: 'top',
      horizontalPosition: 'left'
    });
  }

}
