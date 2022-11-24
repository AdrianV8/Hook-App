import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "../hooks";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  // HOOKS
  const [show, setShow] = useState(false);
  const {description, onInputChange, onResetForm} = useForm({
      description: todo.description
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onEditSubmit = (event) =>{
    event.preventDefault();

    if(description.length >= 1){
      const editTodo = {
        id: todo.id,
        description: description,
        done: todo.done,
      }
      onEditTodo(editTodo)
    }
  }


  return (
    <>
      <li className="list-group-item">

        <span 
          className={`align-self-center ${(todo.done) ? 'text-decoration-line-through': ''}`} 
          onClick={ () => onToggleTodo( todo.id ) }
          aria-label="span"
        >
          {todo.description}
          {todo.done && <span className="bi bi-check"></span>}
          
        </span>
        <div className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleShow} className="btn btn-success">
            Editar
          </Button>
          <button onClick={ () => onDeleteTodo(todo.id) } className="btn btn-danger" aria-label="deleteButton">
            Borrar
          </button>
        </div>

      </li>


      {/* <!-- EDIT MODAL --> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar tarea: {todo.description}</Modal.Title>
        </Modal.Header>
        <form onSubmit={onEditSubmit}>
          <Modal.Body>
            
              <input 
                type="text"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
                />
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} className="btn btn-danger">
              Cancelar
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose} className="btn btn-success">Editar</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
