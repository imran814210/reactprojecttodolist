import './App.css';
import { TodoForm } from './todocomponent/TodoForm';
import './todocomponent/TodoWrapper'
import { TodoWrapper } from './todocomponent/TodoWrapper';

function App() {
  return (
   <>
      <h1>Hello Wordl</h1>
      <TodoWrapper />
      <TodoForm/>
   </>
  );
}

export default App;
