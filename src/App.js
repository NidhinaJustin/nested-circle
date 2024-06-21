import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [radius, setRadius] = useState(0);

  const handleInput = (e) => {
    setRadius(parseInt(e.target.value));
  };
//Function to print circles
  const getCircle = () => {
    let circles=[];
    for (let i = 10; i <= radius; i += 10) {
        circles.push(<circle key={i} cx="200" cy="150" r={i} stroke="white" strokeWidth="2" fill="none" />);
    }
    return circles
  };


  return (
    <div className="App">
      <header className="App-header">
        <label>Radius</label>
        <input
          type="number"
          name="radius"
          value={radius}
          onChange={handleInput}
        />
        {radius ? (<svg width="400" height="400"> {getCircle()} </svg>):(<p>Enter the radius</p>) }
      </header>
    </div>
  );
}

export default App;
