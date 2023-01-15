import "./App.css";
import NewTodo from "./components/NewTodo";
// Todo data type is imported from models/todo.ts
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
