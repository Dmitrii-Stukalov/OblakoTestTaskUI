import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../project";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  public getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('http://0.0.0.0:3000/projects');
  }
}
