import { useEffect, useState } from 'react';
import './App.css';



function App() {
  
  let [users, setUsers] = useState([]);

  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
      setUsers(value);
    });

  }, []);
  
  return (
    <div>
      {
        users.map(value => {return <div key={value.id}>{value.id} - {value.name}</div>;})
      }

    </div>
  );
}

export default App;
