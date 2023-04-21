//import area
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ADDBYONE, RESET, SUBSTRACTBYONE } from "./_constants/constant";
import { addByOne, reset, subByOne } from "./_actionCreator/actionCreator";
//functon defination area
function App() {
  //hooks area

  let storeObject = useSelector((storeObject) => storeObject);
  const dispatch = useDispatch();

  //function defination

  //return statemetns
  return (
    <div className="App">
      {console.log(storeObject)}
      <h1>Counter Using react-redux</h1>

      <h1>{storeObject.value}</h1>

      <button
        onClick={() => {
          dispatch(subByOne());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(addByOne());
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
