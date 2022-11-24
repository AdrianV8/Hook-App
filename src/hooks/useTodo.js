import { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/toDoReducer";

/**
 * Función necesaria para guardar los valores que teniamos previamente en el todo
 */
const init = () => {
  // Que intente 'parsear' lo que se encuentra en el locaslStorage.getItem de los todos
  // Si es nulo que devuelva un arreglo vacío
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  /**
   * useReducer -> Alternativa al useState.
   * Es preferible a useState cuando se tiene una lógica compleja que involucra múltiples subvalores o cuando el próximo estado depende del anterior.
   *
   * Sintaxis -> useReducer([accion], [estado inicial])
   *              * Valor/Argumento 1 -> Introducimos la acción que queremos que haga (agregar, borrar, actualizar, etc)*
   *              * Valor/Argumento 2 -> Estado inicial de donde vamos a trabajar
   *              * Valor/Argumento 3 -> Inicialiar el estado (state) con los valores que existian previamente
   */
  // const [todos, dispatch] = useReducer(todoReducer, [], init);

  // const {handleDeleteTodo, handleEditTodo, handleNewTodo, handleToggleTodo} = useTodo(todoReducer, [], init);
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  /**
   * ---- LOCALSTORAGE ----
   * Para guardar el estado inicial hay que ejecutar un efecto secundario (useEffect)
   * Solo permite string, usar JSON.stringify()
   */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // -> Cuando los todos cambien:

  // Añadir
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add List",
      payload: todo,
    };
    dispatch(action);
  };
  // Borrar
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove List",
      payload: id,
    });
  };
  // Marcar como hecha
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle List",
      payload: id,
    });
  };
  // Editar
  const handleEditTodo = (description) => {
    const editAction = {
      type: "[TODO] Edit List",
      payload: description,
    };
    dispatch(editAction);
  };


  return{
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todos => !todos.done ).length,
    handleDeleteTodo,
    handleEditTodo,
    handleNewTodo,
    handleToggleTodo
  }
};
