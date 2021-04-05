import './App.css';
import { Fragment, useState } from 'react';
import Hello from './components/Hello';

function App() {
  const [msj, setMsj] =  useState('my friend!');
  const handleClick = () =>{
    setMsj('my friend (from changed state)!');
  }
  
  return (
    <Fragment>
      <Hello nombre={msj}/>
      <button type='button'onClick={handleClick}>Click me</button>
    </Fragment>
  );
}

export default App;
