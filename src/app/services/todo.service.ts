import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreationData} from "../models/creation-data";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  public addTodo(data: CreationData): Observable<void> {
    return this.httpClient.post<void>(`https://stukalov-oblako-ui.herokuapp.com/todos`, data);
  }
}
