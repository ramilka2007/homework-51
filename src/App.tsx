import './App.css'
import {useState} from "react";
import Number from "./Number/Number";

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  return (
    <div className="container">
      <Number number={numbers[0]}/>
      <Number number={numbers[1]}/>
      <Number number={numbers[2]}/>
      <Number number={numbers[3]}/>
      <Number number={numbers[4]}/>
    </div>
  )
};

export default App
