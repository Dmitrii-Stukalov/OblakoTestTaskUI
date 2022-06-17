import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../models/todo";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input()
  public todos: Todo[] | undefined;

  @Input()
  public title: string | undefined;

  @Input()
  public projectId: number | undefined;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    console.log(this.todos);
  }

  toggleStatus(todoId: number) {
    this.projectService.toggleStatus(this.projectId, todoId).subscribe(() => {});
  }
}
