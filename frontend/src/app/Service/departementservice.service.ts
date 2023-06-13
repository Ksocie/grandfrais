import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../personne/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }

  private apiServerUrl='http://localhost:9000';

  getAllDepartement(): Observable<any[]> {
    return this.http.get<Departement[]>(`${this.apiServerUrl}/departement`);
  }

}
