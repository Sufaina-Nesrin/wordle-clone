import React, { useState, useEffect } from 'react';
import Row from './components/Row/Row';
import './App.css'
import Keyboard from './components/Keyboard/Keyboard';
import words from './words.json'


function App(props) {
  
  const [tries, setTries] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [reveal, setReveal] = useState([false, false, false, false, false, false])
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const getWord = ()=>{
    return words[Math.floor(Math.random() * words.length)];
  }
 const [word, setWord] = useState(getWord());

  useEffect(() => {
    if (guessedLetters.length === 30 && reveal[5]===true) {
      setGameOver(true);
    }
    
  }, [guessedLetters,reveal[5]]);
  console.log(win);
  return (
    
    <div className='app'>
      {win&&<span style={{color:'green'}}>You win</span>}
      {gameOver&&!win&&<span style={{color:'red'}}>gameOver</span>}
     <h2 style={{color:'white',margin:'2px',padding:'0px',textAlign:'center',fontFamily:'sans-serif'}}>WORDLE</h2> 
     <Row trie={tries[0]} reveal={reveal[0]} word={word} setWin={setWin}/>
     <Row trie={tries[1]} reveal={reveal[1]} word={word} setWin={setWin}/>
     <Row trie={tries[2]} reveal={reveal[2]} word={word} setWin={setWin}/>
     <Row trie={tries[3]} reveal={reveal[3]} word={word} setWin={setWin}/>
     <Row trie={tries[4]} reveal={reveal[4]} word={word} setWin={setWin}/>
     <Row trie={tries[5]} reveal={reveal[5]} word={word} setWin={setWin}/>
     <Keyboard guessedLetters={guessedLetters}  word={word} setGuessedLetters={setGuessedLetters} setTries={setTries} tries={tries} reveal={reveal} gameOver={gameOver} win={win} />
    </div>
  );
}

export default App;