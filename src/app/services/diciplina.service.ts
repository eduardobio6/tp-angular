import { Injectable } from "@angular/core";
import { Diciplina } from "./components/Diciplina";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DiciplinaService {
    private apiUrl = 'http://localhost:3000/disciplinas'


constructor(private http: HttpClient) { }


getAll(): Observable<Diciplina[]> {
    return this.http.get<Diciplina[]>(this.apiUrl)//isso é um padrão do angular, pois ele precisa observar se o arry chega na requisição da api.
  }

}