import { useEffect, useReducer } from 'react';
import './App.css';
import User from './components/user/User';
import { getUsers } from './services/api';

function reducer(state, action) {
  switch (action.type){
    case 'ADD_USERS':
    return {...state, users: action.payload};
    case 'ADD_USER':
    return {...state, user: action.payload};

    default:
      return {...state};
  }
}

export default function App() {
  // let [users, setUsers] = useState([]);
  // let [user, setUser] = useState(null);
  

  let [state, dispatch] = useReducer(reducer, {users: [], user: null});
  let {users, user} = state;

  useEffect(() => {
     getUsers().then(value => dispatch({type:'ADD_USERS', payload: value.data})); }, []);
  
const choose = (id) => {
  let choosenUser = users.find(value => value.id === id);
  dispatch({type: 'ADD_USER', payload: choosenUser});
  // setUser(choosenUser);
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

