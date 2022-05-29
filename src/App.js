import logo from './logo.svg';
import './App.css';
import Character from './components/Character';

function App() {
  return (
    <div>
   <Character image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'} cName={'Bart Simpson'}/>
   <Character image={'https://i.pinimg.com/originals/4e/7e/6c/4e7e6c3cc3ba277088c4b1eef93bbc1b.png'} cName={'Homer Simpson'}/>
   </div>
  );
}

export default App;
