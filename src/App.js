import { useEffect, useState } from 'react';
import './App.css';
import User from './components/user/User';
import { getUsers } from './services/api';



export default function App() {
  
  let [users, setUsers] = useState([]);
  useEffect(() => {
   
    getUsers().then(value => setUsers([...value.data]));

  }, []);
  
  return (
    <div>
      {
        users.map(value => <User key={value.id} item = {value}/>)
      }

    </div>
  );
}

