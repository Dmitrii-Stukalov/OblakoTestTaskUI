import {Todo} from "./todo";

export class Project {
  id: number;
  title: string;
  todos: Todo[];

  constructor(title: string, todos: Todo[]) {
    this.id = -1;
    this.todos = todos;
    this.title = title;
  }
}
