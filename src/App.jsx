import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx';

function App() {
  return (
    // the empty div tag is no use so that is the short hand
    <>   
      <Title />
      <div className='todo__wrapper'>
      <Todo title ="Finish the course"
      paragraph="Code along with me step by step"/>
      <Todo title ="Finish the Interview section"
      paragraph="Finish every Interview Question in the next couple weeks"/>
      <Todo title ="Land 100k job"
      paragraph="Apply to 100 jobs"/>
      </div>
      {/* <Modal title ="Are you sure you want to delete?" /> */}
      {/* <Modal title ="Are you sure you want to add?" /> */}

    </>
  );
}

export default App;
