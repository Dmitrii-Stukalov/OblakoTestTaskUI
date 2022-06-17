import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project";
import {ProjectService} from "../services/project.service";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-all-projects-view',
  templateUrl: './all-projects-view.component.html',
  styleUrls: ['./all-projects-view.component.css']
})
export class AllProjectsViewComponent implements OnInit {
  public projects: Project[] | undefined

  constructor(
    private todoService: TodoService,
    private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllProjects();
    this.projectService.emitter.subscribe(() => this.getAllProjects());
  }

  private getAllProjects() {
    this.projectService.getAllProjects().subscribe(projects => this.projects = projects);
  }
}
