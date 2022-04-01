
import './App.css';
function App() {
  const  example1 = ["pear", "yellow", "small"];
  const example2 = ["toyota", "camry", "black", "expensive"];
  const example3 = {name: "pear", color: "yellow", size: "small"};

  const [name, color, size] = example1
  const [kind, mark, colorr , price] = example2
  return (
    <div className="App">
      This {name} is {color} and {size}.
      This {kind} {mark} is {price} and {colorr}.
    </div>
  );
}

export default App;
