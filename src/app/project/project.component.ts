import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../todo";

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

  constructor() { }

  ngOnInit(): void {
  }

}
