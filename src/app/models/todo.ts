export class Todo {
  id: number;
  text: string;
  is_completed: boolean;

  constructor(text: string) {
    this.id = -1;
    this.text = text;
    this.is_completed = false;
  }
}
