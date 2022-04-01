
import './App.css';
function App() {
  const  example1 = ["pear", "yellow", "small"];

  const [name, color, size] = example1
  return (
    <div className="App">
      This {name} is {color} and {size}.
    </div>
  );
}

export default App;
