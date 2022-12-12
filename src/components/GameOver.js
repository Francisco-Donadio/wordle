import React, { useContext } from "react";
import { AppContext } from "../App";
import { boardDefault } from "../store";

function GameOver() {
  const { gameOver, correctWord, currentAttempt, setBoard } =
    useContext(AppContext);
  // const playAgain = () => {
  //   setBoard(boardDefault);
  // };
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "You Won!" : "You Failed"}</h3>
      <h1>Correct: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currentAttempt.attempt} attempts</h3>
      )}
      {/* //<button onClick={playAgain}>Play Again</button> */}
    </div>
  );
}

export default GameOver;
