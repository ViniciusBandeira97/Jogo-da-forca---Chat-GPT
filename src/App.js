import './App.css';
import React, { useState } from "react";

/** "Marca_Modelo" Cria uma lista de marcas e modelos de carros para o jogo*/
const Marca_Modelo = [
  "Ford Mustang",
  "Banana",
];

/** "Tentativas" Define um número máximo de erros que o jogador pode ter*/
const Tentativas = 3;


/** "Jogo_da_Forca" componente que contém todo o código do jogo */
const Jogo_da_Forca = () => {
  /** Palavra secreta é selecionada aleatoriamente da lista de marcas e modelos*/
  const [selectedCar, setSelectedCar] = useState(
    Marca_Modelo[Math.floor(Math.random() * Marca_Modelo.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [attemptsLeft, setAttemptsLeft] = useState(Tentativas);
  const [wrongLetters, setWrongLetters] = useState([]);  /* "wrongLetters" Inicia Vazio e armazena as letras Erradas*/
  const [isKeyboardDisabled, setIsKeyboardDisabled] = useState(false); /**Verifica se o teclado de letras está habilitado ou não */

  /**Essa função é chamada quando o jogador escolhe uma letra*/
  const handleGuess = (letter) => {
    setGuessedLetters(new Set([...guessedLetters, letter]));

    if (!selectedCar.toLowerCase().includes(letter.toLowerCase())) {
      setAttemptsLeft(attemptsLeft - 1);
          /* Se a letra selecionada não for correspondente da palavra-Secreta, então essa letra é add ao estado "wrongLetters" */
      setWrongLetters([...wrongLetters, letter.toLowerCase()]);
    }
  };

  /* Essa função filtra as Letras erradas */
  const getWrongLetters = () => {
    return Array.from(wrongLetters)
      .map((letter) => letter.toUpperCase())
      .join(", ");
  };
  /**Acabou. Verifica se o número de tentativas restantes é zero ou se todas as letras da palavra secreta foram adivinhadas. Em ambos os casos ele desabilita o teclado*/
  const isGameOver = () => {
    if (attemptsLeft === 0) {
      disableKeyboard();
    }
    const carNameWithoutSpaces = selectedCar.replaceAll(" ", "");
    const isAllLettersGuessed = [...carNameWithoutSpaces].every((char) => guessedLetters.has(char.toLowerCase()));
    return attemptsLeft === 0 || isAllLettersGuessed;   
  };

/** Substitui as letras da palavra secreta por "_" e o espaço em branco por "-" */
  const getMaskedCarName = () => {
    return selectedCar
      .split("")
      .map((char) => {
        if (/^[a-zA-Z]$/.test(char)) {
          const isLetterGuessed = guessedLetters.has(char.toLowerCase());
          return isLetterGuessed ? char : " _ ";
        } else if (char === " ") {
          return "-";
        } else {
          return char;
        }
      })
      .join("");
  };
/**Desabilita o teclado de letras, tornando todos os botões de letras inativos */
  const disableKeyboard = () => {
    const keyboardButtons = document.querySelectorAll("button");
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });
  };
/**Reinicia o jogo, reinicia letras adivinhadas, letras errada e tentativas restantes. Set nova palavra secreta e reabilita o teclado após (500ms) */  
  const resetGame = () => {
    setSelectedCar(Marca_Modelo[Math.floor(Math.random() * Marca_Modelo.length)]);
    setGuessedLetters(new Set());
    setWrongLetters(new Set());
    setAttemptsLeft(Tentativas);
    setIsKeyboardDisabled(true);
    setTimeout(() => {
      setIsKeyboardDisabled(false);
    }, 500);
  };



  return (
    <div>
      <h1>Jogo da forca - Car Brands and Models Edition</h1>
      <p>Você possui: {attemptsLeft} tentativas</p>
      <p>{getMaskedCarName()}</p>
      <div>
        {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => (
          <button key={letter} disabled={guessedLetters.has(letter.toLowerCase()) || isKeyboardDisabled } onClick={() => handleGuess(letter)}>
            {letter}
          </button>
        ))}
          <p>Wrong letters: {getWrongLetters()}</p>
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

export default Jogo_da_Forca;