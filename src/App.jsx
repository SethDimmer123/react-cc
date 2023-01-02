import './App.css';
// import Todo from './components/Todo.jsx'
// import Title from './components/Title.jsx'
// import Modal from './components/Modal.jsx';
// import Counter from "./components/Counter.jsx"
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
  }

  export default App;























// const [showModal, setShowModal] = useState(false)

// function onTodoDelete() {
//   setShowModal(true)
//   console.log('onTodoDelete()')
// }

// function onModalCancel() {
//   setShowModal(false)

// }

// function onModalConfirm() {
//   setShowModal(false)
//   console.log('onModalConfirm()')
// }
// useEffect(() => {
//   console.log('ONLY on mount')
// },[])

// useEffect(() => {
//   console.log(`on mount AND on ${showModal} change`)
// },[showModal])

// useEffect(() => {
//   console.log('EVERY render')
// })




















//     the empty div tag is no use so that is the short hand
//     <>
//       <Title />
//       <div>
//         <input type="text" onChange={(event) => {
//           console.log(event.target.value)
//         }} />
//         <button onClick={() => setShowModal(true)}>Add todo</button>
//       </div>
//       <div className='todo__wrapper'>
//       <Todo onTodoDelete={onTodoDelete} title ="Finish the course" />
//       <Todo onTodoDelete={onTodoDelete}  title ="Finish the Interview section"/>
//       <Todo onTodoDelete={onTodoDelete}  title ="Land 100k job"/>
//       </div>
//       {/* {showModal && <Modal onModalCancel={onModalCancel}  onModalConfirm={onModalConfirm} title ="Confirm Delete?" />}

//     </>
//   );
// }

// export default App; */}
