import { useState } from "react";

export const TodoDelete = ({onDeleteTodo, todos}) => {
  // console.log(todos[0]);
  
  const [tarea, setTarea] = useState(todos)

  const borrarTarea = () =>{
    setTarea(tareaActual =>
      tareaActual.filter(infoTarea => {
        console.log(infoTarea);
        return infoTarea;
      })  
    );
  };

  // const initialState = [
  //   {id: 1, name: 'Alice', country: 'Austria'},
  //   {id: 2, name: 'Bob', country: 'Belgium'},
  // ];
  // const [employees, setEmployees] = useState(initialState);

  // const removeSecond = () => {
  //   setEmployees(current =>
  //     current.filter(employee => {
  //       console.log(employee);
  //       return employee.id !== 2;
  //     }),
  //   );
  // };

  return (

    <button 
    onClick={borrarTarea}
    className="btn btn-danger"
    
    >
      Borrar
    </button>

  )

}
