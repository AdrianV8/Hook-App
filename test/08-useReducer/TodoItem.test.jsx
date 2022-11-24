import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas TodoItem", () => {

  const data = {
    id: 1,
    description: "Demo Todo",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach( () => jest.clearAllMocks() );

  test("should show Todo to do to complete", () => {

    render( <TodoItem todo={data} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item');
    // Comprobamos que no está tachada la tarea
    const spanElement = screen.getByLabelText('span')
    expect(spanElement).toBeTruthy();
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');

  });

  test("should show Todo complete", () => {
    data.done = true;
    render( <TodoItem todo={data} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );
    const spanElement = screen.getByLabelText('span')

    /**
     * Probar a hacerlo con un fireevent en el span
     */
    
    expect(spanElement.className).toContain('text-decoration-line-through');

  });

  test('span should call ToggleTodo when click in it', () => { 
    
    render( <TodoItem todo={data} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );
    const spanElement = screen.getByLabelText('span')
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(data.id);

  })

  test('should call DeleteTodo when click in Delete Button', () => { 
    
    render( <TodoItem todo={data} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );
    const deleteButtonElement = screen.getByLabelText('deleteButton')
    fireEvent.click(deleteButtonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(data.id);

  })

  

});
