import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx';
import Counter from "./components/Counter.jsx"
import React, { useState } from 'react';

function App() {
const [showModal, setShowModal] = useState(false)

function onTodoDelete() {
  setShowModal(true)
  console.log('onTodoDelete()')
}



  return (
    // the empty div tag is no use so that is the short hand
    <>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className='todo__wrapper'>
      <Todo onTodoDelete={onTodoDelete} title ="Finish the course" />
      <Todo onTodoDelete={onTodoDelete}  title ="Finish the Interview section"/>
      <Todo onTodoDelete={onTodoDelete}  title ="Land 100k job"/>
      </div>
      {showModal && <Modal title ="Confirm Delete?" />}

    </>
  );
}

export default App;
