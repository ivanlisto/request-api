import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }
    public getFotos():Observable<any> {
      return this.http.get('https://gateway.stg.cloud.pje.jus.br/previdenciario-api/api/v1/dossiemedico/2.0.0/statusDossie/3c5809ad-098d-4a73-a106-edb41');
    }
}
