import './Style/App.css';
import './Style/ButtonNovoJogo.css'
import './Style/PalavraSecreta.css'
import './Style/Paragrafo.css'
import React, { useState } from "react";


/** "Marca_Modelo" Cria uma lista de marcas e modelos de carros para o jogo com 168 Modelos*/
const Marca_Modelo = [
  /** HONDA */
  "Honda Accord", "Honda Civic", "Honda CRV", "Honda HRV", "Honda WRV", "Honda Fit", "Honda City",
  /** TOYOTA */
  "Toyota Camry", "Toyota Corolla", "Toyota Hilux", "Toyota Etios", "Toyota Yaris", "Toyota Prius", "Toyota Bandeirante", "Toyota Supra", "Toyota Fielder", "Toyota Tundra", "Toyota RAV4",
  /** NISSAN */
  "Nissan 350Z", "Nissan 370Z", "Nissan Frontier", "Nissan GTR", "Nissan March", "Nissan Sentra", "Nissan Tida", "Nissan Versa",
  /** FORD */
  "Ford KA", "Ford Fiesta", "Ford Focus", "Ford Fusion", "Ford Edge", "Ford Ecosport", "Ford Maverick", "Ford Mustang", "Ford Ranger", "Ford F1000", "Ford F150",
  /** Chevrolet */
  "Chevrolet Astra", "Chevrolet Celta", "Chevrolet Blazer", "Chevrolet Opala", "Chevrolet Camaro", "Chevrolet Corsa", "Chevrolet Corvette", "Chevrolet Cruze", "Chevrolet Equinox",
  "Chevrolet Malibu", "Chevrolet Montana", "Chevrolet Omega", "Chevrolet Monza", "Chevrolet Onix", "Chevrolet Prisma", "Chevrolet Spin", "Chevrolet Tracker", "Chevrolet Vectra",
  "Chevrolet S10",
  /** FIAT */
  "Fiat Argo", "Fiat Uno", "Fiat Cronos", "Fiat Linea", "Fiat Mobi", "Fiat Palio", "Fiat Pulse", "Fiat Punto", "Fiat Stilo", "Fiat Strada", "Fiat Toro", "Fiat Idea", "Fiat Freemont", "Fiat Fiorino",
  "FIAT 147",
  /** Hyundai */
  "Hyundai Azera", "Hyundai Creta", "Hyundai Elantra", "Hyundai Sonata", "Hyundai Tucson", "Hyundai Veloster", "Hyundai Veracruz", "Hyundai I30", "Hyundai HB20", "Hyundai IX35",
  /** Kia */
  "Kia Cadenza", "Kia Carnival", "Kia Cerato", "Kia Mohave", "Kia Optima", "Kia Picanto", "Kia Rio", "kia Sorento", "Kia Soul", "Kia Sportage", "Kia Stinger",
  /** Volkswagen */
  "Volkswagen Amarok", "Volkswagen Bora", "Volkswagen Fox", "Volkswagen Fusca", "Volkswagen Gol", "Volkswagen Golf", "Volkswagen Jetta", "Volkswagen Nivus", "Volkswagen Parati", "Volkswagen Passat",
  "Volkswagen Polo", "Volkswagen Santana", "Volkswagen Saveiro", "Volkswagen Quantum", "Volkswagen Spacefox", "Volkswagen Tcross", "Volkswagen Taos", "Volkswagen Tiguan", "Volkswagen Touareg", "Volkswagen Up",
  "Volkswagen Virtus", "Volkswagen Voyage", "Volkswagen Variant",
  /** Mitsubishi */
  "Mitsubishi ASX", "Mitsubishi Eclipse", "Mitsubishi Lancer", "Mitsubishi Pajero", "Mitsubishi Outlander", "Mitsubishi L200",
  /** Jeep */
  "Jeep Compass", "Jeep Commander", "Jeep Renegade", "Jeep Wrangler", "Jeep Cherokee",
  /** BMW */
  "BMW 120I", "BMW 320I", "BMW 325I", "BMW 328I", "BMW 335I", "BMW M2", "BMW M3", "BMW M5", "BMW X1", "BMW X3", "BMW X5", "BMW X6",
  /** Mercedes-Benz */
  "MercedesBenz A200", "MercedesBenz C180", "MercedesBenz C200", "MercedesBenz C63AMG", "MercedesBenz GLA200",
  /** Audi */
  "Audi A1", "Audi A3", "Audi A4", "Audi A5", "Audi Q3", "Audi Q5", "Audi Q7", "Audi RS3", "Audi RS6", "Audi RS7", "Audi TT", "Audi R8",
  /** Porsche */
  "Porsche Cayenne", "Porsche Boxster", "Porsche Macan", "Porsche Panamera", "Porsche Cayman", "Porsche 911", "Porsche 918"
  
];

/** "Tentativas" Define um número máximo de erros que o jogador pode ter*/
const Tentativas = 5;


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
        if (/^[a-zA-Z0-9]$/.test(char)) {
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
    verificaResultado(new Set());
    setAttemptsLeft(Tentativas);
    setIsKeyboardDisabled(true);
    setTimeout(() => {
      setIsKeyboardDisabled(false);
    }, 500);
  };

  const verificaResultado = ()  =>{
    const msg1 = 'Parabéns você acertou!';
    const msg2 = 'Você perdeu!';
    
    if(attemptsLeft >= 1){
      return msg1;
    }else {
      return msg2;
    }
  };


  return (
    <>
       <header>
        <h1>Jogo da forca</h1>
      </header>
    <div className='container'>
      <p className='Pos-Titulo'>Veja se você realmente é um entendedor do mundo automotivo</p>
      <p className='Legenda'>Primeira palavra é composta por MARCA e a segunda palavra por MODELO de carro correspondente a marca.</p>
      <p className='Tentativas'>Você possui: {attemptsLeft} tentativas</p>
      <p className='Errou'>Erros: {getWrongLetters()}</p>
      <p className='Palavra-Secreta'>{getMaskedCarName()}</p>

      <div className='teclado'>
          {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => (
            <button className='alfabeto' key={letter} disabled={guessedLetters.has(letter.toLowerCase()) || isKeyboardDisabled } onClick={() => handleGuess(letter)}>
              {letter}
            </button> ))}   
          <div className='teclado'>  
          {Array.from("0123456789").map((letter) => (
            <button className='numerico' key={letter} disabled={guessedLetters.has(letter.toLowerCase()) || isKeyboardDisabled } onClick={() => handleGuess(letter)}>
              {letter}
            </button> ))} 
          </div>
      </div>
      {isGameOver() && (
        <div>
          <div>
            <h2 className='mensagem'>{verificaResultado()}</h2>
            <p className='correto'>{selectedCar}</p>
          </div>
          <button className='novojogo' onClick={resetGame}>Nova Partida</button>
          <p>Jogue novamente</p>
        </div>

      )}
      
    </div>
      <footer><p></p></footer>
    </>
  );
};

export default Jogo_da_Forca;