import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [coins, setCoins] = useState(0);
  const [add, setAdd] = useState(1);

  const addOne = () => {
    setCounter(counter + add);
    setCoins(coins + add);
  };

  const minusTwenty = () => {
    if (coins == 20) {
      setCoins(coins - 20);
      setAdd(2);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#caf0f8",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "red",
          width: "90vw",
          height: "20vh",
        }}
      >
        <h3>
          <img
            style={{
              height: "5vh",
            }}
            src="https://static.vecteezy.com/system/resources/previews/012/177/443/original/simple-gold-coin-png.png"
          />
          {coins}
        </h3>
      </div>
      <div
        style={{
          fontFamily: "serif",
          textAlign: "center",
          color: "navy",
        }}
      >
        <h1>{counter}</h1>
        <h5>Cookies Eaten</h5>
      </div>
      <button
        style={{
          color: "lightblue",
          backgroundColor: "navy",
          borderRadius: "3px",
        }}
        onClick={addOne}
      >
        Eat Cookie
      </button>
      {/* conditional rendering, in this case, if coins = 20 then pop up the button*/}
      {coins == 20 ? (
        <div>
          <button onClick={minusTwenty}>Purchase building 1</button>
        </div>
      ) : (
        <></>
      )}
      {/* {
        coins == 30 ? (
          <div>
            <button onClick={}>

            </button>
          </div>
        )
      }  here i want to do change coins by seconds*/}
    </div>
  );
}

export default App;
