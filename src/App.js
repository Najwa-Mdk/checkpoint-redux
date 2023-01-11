
import './App.css';
import ListTasks from './Components/ListTasks/ListTask';
import AddTask from "./Components/AddTask/AddTask";

function App() {
  return (
    <div className="App">
   <h1>TODO TASK</h1>
   <AddTask/>
   <ListTasks/>
    </div>
  );
}

export default App;
