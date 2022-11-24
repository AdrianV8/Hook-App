export const todoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case "[TODO] Add List":
      /**
       * Hay que devolver un state
       * Este puede ser un objeto, un string, un booleano, etc
       * En este caso es un aray, devolveriamos un array
       */
      return [...initialState, action.payload];

    case "[TODO] Remove List":
      /**
       * Filtramos por ID (enviado desde el payload) creando un nuevo array
       */
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle List":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          // Devolvemos lo contrario al estado inicial
          // console.log(todo);
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    case "[TODO] Edit List":
        return initialState.map((todo) => {
            if(todo.id === action.payload.id){
                return {
                    ...todo,
                    description: action.payload.description
                }
            }
            return todo;
        });

    default:
      return initialState;
  }
};
