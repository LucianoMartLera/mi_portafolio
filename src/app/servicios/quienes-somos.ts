import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuienesSomos {
  private urlApi:string = 'http://localhost:3000/proyectos';

  constructor(private http: HttpClient) {
    
  }

  getProfecion():Observable<any> {
    return this.http.get(this.urlApi);
  }
}
