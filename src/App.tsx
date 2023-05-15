
import './App.css';
import { Todo } from './Todo/Todo';
import { Counter } from './componets/Counter';

function App() {
  return (
    <div className="App">
     <Counter/>
     <br/>
     <br/>
     <hr/>
     

     <Todo/>
    </div>
  );
}

export default App;
