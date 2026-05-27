import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitation } from '../interface/Solicitation';
import { MovementType } from '../interface/MovementType';

@Injectable({
  providedIn: 'root',
})
export class SolicitacionService {


  private apiUrl = 'https://estoque-boux.onrender.com/solicitations';

  constructor(private http: HttpClient) {}

  // Funcionário cria a solicitação
  createSolicitation(solicitation: any): Observable<Solicitation> {
    return this.http.post<Solicitation>(this.apiUrl, solicitation);
  }

  // Almoxarifado lista os pendentes
  getAllPending(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(`${this.apiUrl}/pending`);
  }

  // Almoxarifado aprova ou recusa
  updateStatus(id: number, status: MovementType): Observable<Solicitation> {
    return this.http.patch<Solicitation>(`${this.apiUrl}/${id}/status`, null, {
      params: { status }
    });
  }

  // Histórico do funcionário
  getByResponsible(responsibleId: number): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(`${this.apiUrl}/responsible/${responsibleId}`);
  }

  // trazer todas as solicitacoes
  getAllSolicitations(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(this.apiUrl);
  }
}
