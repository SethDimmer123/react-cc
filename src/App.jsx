import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'

function App() {
  return (
    <div>
      <Title />
      <div className='todo__wrapper'>
      <Todo />
      <Todo />
      <Todo />
      </div>
    </div>
  );
}

export default App;
