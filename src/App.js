import './App.css';
import CompletedItems from './CompletedItems';
import NewToDoITem from './NewToDoITem';
import TodoItem from './TodoItem';

function App() {
  return (
    <div className="App">
      <NewToDoITem />
     <TodoItem />
     <CompletedItems />
    </div>
  );
}

export default App;
