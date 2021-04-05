import './App.css';
import { Fragment } from 'react';
import Hello from './components/Hello';

function App() {
  return (
    <Fragment>
      <Hello nombre='my friend!'/>
    </Fragment>
  );
}

export default App;
