import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [gameTime, setGameTime] = useState(60);
  const [startGame, setStartGame] = useState(false);
  const inputRef = useRef(null);

  const handleChange = event => {
    setEnteredText(event.target.value);
  };

  const handleStartGame = () => {
    setStartGame(!startGame);
    setTimeRemaining(gameTime);
    setEnteredText("");
  };

  useEffect(() => {
    const splitString = enteredText.split(" ");
    const filteredString = splitString.filter(word => word !== "");
    setWordCount(filteredString.length);
  }, [enteredText]);

  useEffect(() => {
    if (startGame === true) {
      inputRef.current.focus();
      setTimeout(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(prevTime => prevTime - 1);
        } else {
          setStartGame(false);
        }
      }, 1000);
    }
  }, [timeRemaining, startGame]);

  console.log(enteredText);

  console.log(wordCount);

  return (
    <div className="App">
      <h1>Typen Gaem</h1>
      <textarea
        ref={inputRef}
        onChange={handleChange}
        value={enteredText}
        disabled={!startGame}
        style={
          startGame
            ? { background: "yellow" }
            : { background: "rgb(122, 122, 0)" }
        }
      />
      <h4>Tiem has: {timeRemaining}</h4>
      <h4>Word is: {wordCount} </h4>
      <button onClick={handleStartGame}>{startGame ? "reset" : "start"}</button>
    </div>
  );
}

export default App;
