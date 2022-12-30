import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx';

function App() {
  let isModalOpen = false;
  return (
    // the empty div tag is no use so that is the short hand
    <>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add todo</button>
      </div>
      <div className='todo__wrapper'>
      <Todo title ="Finish the course" />
      <Todo title ="Finish the Interview section"/>
      <Todo title ="Land 100k job"/>
      </div>
      {isModalOpen ? <Modal title ="Confirm Delete?" /> : null}

    </>
  );
}

export default App;
