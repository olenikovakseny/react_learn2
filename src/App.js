import { useEffect, useState } from 'react';
import './App.css';
import User from './components/user/User';



export default function App() {
  
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
        users.map(value => <User key={value.id} item = {value}/>)
      }

    </div>
  );
}

