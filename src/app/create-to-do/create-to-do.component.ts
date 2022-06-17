import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CreationData} from "../models/creation-data";
import {Project} from "../models/project";
import {TodoService} from "../services/todo.service";


@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {
  public creationData: CreationData = {taskName: '', category: ''};
  public selectedCategory: string = '';

  constructor(public dialogRef: MatDialogRef<CreateToDoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Project[],
              private todoService: TodoService) {
  }

  public ngOnInit(): void {
    console.log(this.data)
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public createTodo(): void {
    if (this.selectedCategory !== 'new') {
      this.creationData.category = this.selectedCategory;
    }
    this.todoService.addTodo(this.creationData).subscribe(() => {});
  }
}
