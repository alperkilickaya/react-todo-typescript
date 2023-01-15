// This is a model class for a todo item

class Todo {
  id: number;
  text: string;

  constructor(todoText: string) {
    this.id = Math.random();
    this.text = todoText;
  }
}

export default Todo;
