import './App.css'
import {useState} from "react";
import Number from "./Number/Number";

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const displayNewNumbers = () => {
    const newNumberToDisplay: number[] = [];

    while (newNumberToDisplay) {
        if (newNumberToDisplay.length > 5) {
            break;
        } else if (newNumberToDisplay.length <= 5) {
            const newNumber: number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            newNumberToDisplay.push(newNumber);
        }
    }

    setNumbers(newNumberToDisplay);
  };

  return (
    <div className="container">
      <div><button type="button" onClick={displayNewNumbers}>New numbers</button></div>
      <Number number={numbers[0]}/>
      <Number number={numbers[1]}/>
      <Number number={numbers[2]}/>
      <Number number={numbers[3]}/>
      <Number number={numbers[4]}/>
    </div>
  )
};

export default App
