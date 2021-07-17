import './App.css';
import { Counter } from './components/Counter';
import { Controls } from './components/Controls';

function App() {
  return (
    <div className="App">
      <Controls />
      <Counter />
    </div>
  );
}

export default App;
