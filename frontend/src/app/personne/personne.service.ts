import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from './personne';

@Injectable({providedIn: 'root'})

export class PersonneService {
  private apiServerUrl='http://localhost:9000';



  constructor(private http: HttpClient) {}


  public getAllPersonne(): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this.apiServerUrl}/all`);
  }

  public createPersonne(personne: Personne): Observable<Personne>{
    return this.http.post<Personne>(`${this.apiServerUrl}/add`, personne);
  }
  //Recuperer les données du formulaire
  getById(id: any){
    return this.http.get(`${this.apiServerUrl}/personne/${id}`);
  }

  public updatePersonne(id:number,personne: Personne): Observable<Personne>{
    return this.http.put<Personne>(`${this.apiServerUrl}/update/${id}`, personne);
  }

  public deletePersonne(personneId: number): Observable<Personne>{
    return this.http.delete<Personne>(`${this.apiServerUrl}/delete/${personneId}`);
  }

}

