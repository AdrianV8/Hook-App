import { todoReducer } from "../../src/08-useReducer/toDoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("should return initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should add todo", () => {
    const action = {
      type: "[TODO] Add List",
      payload: {
        id: 2,
        description: "Hola Mundo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("should remove todo", () => {
    const action = {
      type: "[TODO] Remove List",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("should toggle todo", () => {
    
    const action = {
        type: "[TODO] Toggle List",
        payload: 1,
      };
    const toggleTodo = todoReducer(initialState, action)
    expect(toggleTodo[0].done).toBeTruthy();


  });
});
