import { useForm } from "../hooks";

// onNewTodo se usa para emitir el resultado
export const TodoAdd = ({ onNewTodo }) => {

    const {description, onInputChange, onResetForm } = useForm({
        /**
         * Mismo nombre que el 'name' del input
         */
        description:''
    })

    const onFormSubmit = ( event ) =>{

        event.preventDefault();

        if(description.length >=1 ){

            const newTodo = {
                id: new Date().getTime(),
                description: description,
                done: false,
            }

            onNewTodo(newTodo);
            onResetForm();
        }

        
    }

    return (
      <>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            name="description"
            value={description}
            onChange={onInputChange}
          />
          <button type="submit" className="btn btn-outline-warning mt-2">
            Agregar
          </button>
        </form>
      </>
    );
  };