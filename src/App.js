import { useEffect, useState } from 'react';
import './App.css';
import User from './components/user/User';
import { getUsers } from './services/api';



export default function App() {
  
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState(null);
  useEffect(() => {
   
    getUsers().then(value => setUsers([...value.data]));

  }, []);
  
const choose = (id) => {
  let choosenUser = users.find(value => value.id === id);
  setUser(choosenUser);
};

  return (
    <div>
      {
        users.map(value => <User key={value.id} item = {value} choose={choose}/>)
      }

      {
        user && <div>{user.id} - {user.name}</div>
      }
    </div>
  );
}

