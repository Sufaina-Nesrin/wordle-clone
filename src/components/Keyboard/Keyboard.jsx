import React, { useEffect, useState } from "react";
import "./Keyboard.css";

//target.addEventListener(type, listener[, options]);

function Keyboard({
  guessedLetters,
  word,
  setGuessedLetters,
  setTries,
  tries,
  reveal,
  gameOver,
  win

}) {
 

  const handleClick = (key) => {
    if(gameOver|win) return
    if (tries.length === 0) {
      setGuessedLetters([...guessedLetters, key]);
      setTries([...tries, [key]]);
    } 

    else {
      const updateTries = [...tries];

      if (updateTries[tries.length - 1].length < 5) {
        //last array
        updateTries[tries.length - 1].push(key);
        setTries(updateTries);
        setGuessedLetters([...guessedLetters, key]);
      } else {
        alert("only 5 letter should be added");
      }
    }
  };


  const enterClick = () => {
    const theTries = [...tries];
    if (theTries[tries.length - 1].length === 5) {
      reveal[tries.length - 1] = true;
      setTries([...tries, []]);
    } else {
      alert("first fill the row");
    }
  };

  const removeClick = () => {
    let keys = guessedLetters.slice();
    let trie = tries.slice();

    if (keys.length === 0 || trie[trie.length - 1].length === 0) {
      alert("Nothing to remove");
    } else {
      keys.pop();
      trie[trie.length - 1].pop();

      setGuessedLetters(keys);
      setTries(trie);
    }
  };
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (/^[a-zA-Z]$/.test(key)) {
        handleClick(key.toLowerCase());
      } else if (key === "Enter") {
        enterClick();
      } else if (key === "Backspace") {
        removeClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  let singleArray;
  if (tries.length != 0) {
    singleArray = tries.slice(0, tries.length - 1).flat();
  }

  const letterKey = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  return (
    <div className="keyboard">
      <div className="gridBox">
        {letterKey.map((key, index) => (
          <button
          disabled={gameOver|win}
            className={`button ${
              singleArray?.includes(key) &&
              !tries.length - 1 &&
              guessedLetters.includes(key) &&
              word.includes(key)
                ? "greenKey"
                : ""
            } ${
              singleArray?.includes(key) &&
              !tries.length - 1 &&
              guessedLetters.includes(key) &&
              !word.includes(key)
                ? "blackKey"
                : ""
            }`}
            onClick={() => handleClick(key)}
            key={key}>
            {key}
          </button>
        ))}

        <button onClick={enterClick}>Enter</button>
        <button onClick={removeClick}>
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
