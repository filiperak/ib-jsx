import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* {show && <Counter/>} ako je show tru ispisi mi counter, radi isto kao linija ispod */}
      {show? <Counter/> : null}
      <button onClick={() => setShow(!show)}>{show? 'hide':'show'}</button>
    </div>
  );
}

export default App;
