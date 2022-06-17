import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../models/project";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public emitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(private httpClient: HttpClient) {
  }

  public getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('https://stukalov-oblako.herokuapp.com/projects');
  }

  public toggleStatus(projectId: number | undefined, todoId: number): Observable<void> {
    return this.httpClient.patch<void>(`https://stukalov-oblako.herokuapp.com/projects/${projectId}/todos/${todoId}`, null);
  }
}
