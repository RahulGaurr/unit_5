import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(3);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  const [balls, setBalls] = useState(1);

  //  };
  function handleScore(value) {
    setScore(score + value);
  }
  function handlewicket(value) {
    setWicket(wicket + value);
  }
  function handleballs() {
    if (balls > 0.5) {
      setOver(over + 1);
      setBalls(0.1);
    } else {
      setBalls(balls + 0.1);
      setOver(over);
    }
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <>
          <div>
            Score:{" "}
            <h1 className="scoreCount">
              {
                // show "score" here
                score
              }
            </h1>
          </div>
          <div>
            Wicket: <h1 className="wicketCount">{wicket}</h1>
          </div>

          <div>
            Over:{" "}
            <h1 className="overCount">
              {
                (over + balls).toFixed(1)
                // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
                // if 1 more ball is thrown then over is now 5.0
                // you have to write logic to form this string from current ball number.
              }
            </h1>
          </div>
        </>
      </div>

      <div className="addScore">
        Add Score
        <button className="addScore1" onClick={() => handleScore(+1)}>
          Add 1
        </button>
        <button className="addScore4" onClick={() => handleScore(+4)}>
          Add 4
        </button>
        <button className="addScore6" onClick={() => handleScore(+6)}>
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => handlewicket(+1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={handleballs}>Add 1</button>
      </div>

      {score > 100 && wicket < 10 ? (
        <h1 className="status">India Won</h1>
      ) : null}
    </div>
  );
}

export default App;
