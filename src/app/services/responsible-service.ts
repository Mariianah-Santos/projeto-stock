import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsavel } from '../interface/responsavel';

@Injectable({
  providedIn: 'root',
})
export class ResponsibleService {

  private apiUrl = 'http://localhost:8080/responsible';

  constructor(private http: HttpClient) {

  }

  getAllResponsible(): Observable<Responsavel[]> {
    return this.http.get<Responsavel[]>(this.apiUrl);
  }

  getResponsibleById(id: number): Observable<Responsavel> {
    return this.http.get<Responsavel>(`${this.apiUrl}/${id}`);
  }

  createResponsible(responsible: Responsavel): Observable<Responsavel> {
    return this.http.post<Responsavel>(`${this.apiUrl}`, responsible);
  }

  updateResponsible(id: number, responsible: Responsavel): Observable<Responsavel> {
    return this.http.put<Responsavel>(`${this.apiUrl}/${id}`, responsible);
  }

  deleteResponsible(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
