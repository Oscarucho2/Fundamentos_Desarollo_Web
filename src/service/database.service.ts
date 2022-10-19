import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const URL = 'assets/data/database.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient ) { }
 
  getAll(){
    return this.http.get(URL)
  }

/*
METODO CON JSON
  //creacion de metodos para hacer uso de ellos
  GetAll(){
    return this.http.get(URL_EMPLEADOS)
  }
}*/
}