import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '../Models/action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private baseURL = "http://localhost:8081/HechemApp";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllActions(): Observable<Action[]> {
    return this.http.get<Action[]>(this.baseURL + '/action/getAll', this.httpOptions)
  }

  getAction(id: any): Observable<Action> {
    return this.http.get<Action>(this.baseURL + '/action/get/'+ id, this.httpOptions)
  }
  addAction(Action: Action): Observable<Action> {
    return this.http.post<Action>(this.baseURL + '/action/add/',Action, this.httpOptions)
  }
  updateAction(Action: Action): Observable<Action> {
    return this.http.put<Action>(this.baseURL + '/action/edit/', Action, this.httpOptions)
  }

  deleteActionById(id: number) {
    console.log(id)
    return this.http.delete(this.baseURL + '/action/delete/' + id, this.httpOptions)
  }


}
