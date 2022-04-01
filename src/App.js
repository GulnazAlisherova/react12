
import './App.css';
function App() {
  const  example1 = ["pear", "yellow", "small"];

  const [name, color, size] = example1
  return (
    <div className="App">
      This {example1[0]} is {example1[1]} and {example1[2]}.
    </div>
  );
}

export default App;
