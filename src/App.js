import React, { useState } from "react";
import './App.css'

const CAR_BRANDS_AND_MODELS = [
  "Ford Mustang",
  "Banana",
];

const MAX_ATTEMPTS = 3;



const HangmanGame = () => {
  const [selectedCar, setSelectedCar] = useState(
    CAR_BRANDS_AND_MODELS[Math.floor(Math.random() * CAR_BRANDS_AND_MODELS.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);

  const handleGuess = (letter) => {
    setGuessedLetters(new Set([...guessedLetters, letter]));

    if (!selectedCar.toLowerCase().includes(letter.toLowerCase())) {
      setAttemptsLeft(attemptsLeft - 1);
    }
  };

  const isGameOver = () => {
    return attemptsLeft === 0 || selectedCar.replaceAll(" ", "").toLowerCase() === getMaskedCarName().toLowerCase();
  };

  const getMaskedCarName = () => {
    return selectedCar
      .split("")
      .map((char) => {
        if (/^[a-zA-Z ]$/.test(char)) {
          const isLetterGuessed = guessedLetters.has(char.toLowerCase());
          return isLetterGuessed ? char : "_";
        } else {
          return char;
        }
      })
      .join("");
  };

  const resetGame = () => {
    setSelectedCar(CAR_BRANDS_AND_MODELS[Math.floor(Math.random() * CAR_BRANDS_AND_MODELS.length)]);
    setGuessedLetters(new Set());
    setAttemptsLeft(MAX_ATTEMPTS);
  };

  return (
    <div>
      <h1>Hangman Game - Car Brands and Models Edition</h1>
      <p>Attempts Left: {attemptsLeft}</p>
      <p>{getMaskedCarName()}</p>
      <div>
        {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => (
          <button key={letter} disabled={guessedLetters.has(letter.toLowerCase())} onClick={() => handleGuess(letter)}>
            {letter}
          </button>
        ))}
      </div>
      {isGameOver() && (
        <div>
          <p>{selectedCar}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default HangmanGame;