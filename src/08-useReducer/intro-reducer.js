
/**
 * Este será el estado inicial de la aplicación
 */
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];
/**
 * 
 * @param {*} state Le pasamos el estado anterior (que en este caso es el initialState)
 * @param {*} action Indica al todoReducer como quiere que cambie el estado
 */
const todoReducer = (state = initialState, action = {}) => {

    /**
     * Si el tipo conincide, se devolverá el mismo array junto al `payload` del action (addToDoAction)
     * que tiene como valor los nuevos valores a introducir
     * 
     * ¡IMPORTANTE!
     * NO se sebe de hacer un .push, ya que estaríamos mutando y es una mala practica,
     * para ello se hará una copia con ...state
     */
    if (action.type === '[ToDo] add toDo'){
        return [...state, action.payload]
    }

    // Siempre va a tener que devolver un estado (state)
    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false

}

console.log(todos);

// Acción para Reducer
const addTodoAction = {
    type: '[ToDo] add toDo',
    payload: newTodo,
}
// Enviamos el estado actual (todos al Reducer)
todos = todoReducer( todos, addTodoAction );

console.log(todos);