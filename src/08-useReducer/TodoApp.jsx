import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";



export const TodoApp = () => {


  const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleEditTodo, handleNewTodo, handleToggleTodo} = useTodo();

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <h4>Tareas totales: { todosCount } Pendientes: { pendingTodosCount }</h4>
      <div className="row">
        <div className="col-7">
          {<TodoList 
            todos={todos} 
            onDeleteTodo={ id => handleDeleteTodo(id) }
            onEditTodo={ handleEditTodo }
            onToggleTodo={ handleToggleTodo }
          />}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          {<TodoAdd onNewTodo={handleNewTodo} />}
        </div>
      </div>
    </>
  );
};
