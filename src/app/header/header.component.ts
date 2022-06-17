import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateToDoComponent} from "../create-to-do/create-to-do.component";
import {Project} from "../models/project";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public projects: Project[] | undefined;

  constructor(public dialog: MatDialog,
              private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  public openForm() {
    const dialogRef = this.dialog.open(CreateToDoComponent, {
        height: '300px',
        width: '400px',
        data: this.projects
      }
    )
    dialogRef.afterClosed().subscribe((data) => {
      console.log('The dialog was closed');
      console.log(data);
      this.projectService.emitter.emit();
    });
  }

}
