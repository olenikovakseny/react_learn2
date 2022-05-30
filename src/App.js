import { useEffect, useState } from 'react';
import './App.css';



function App() {
  
  let [x, setx] = useState(0);
  useEffect(() => {
    console.log('effect');
  }, [x]);
  
  return (
    <div>
     <button onClick={() => {
       setx(++x);
     }}>button</button>

    </div>
  );
}

export default App;
