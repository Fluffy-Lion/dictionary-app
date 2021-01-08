import React, { useState, useEffect } from 'react'
import './App.css';
import WordResult from './components/WordResult'
require('dotenv').config()

function App() {
  const [randomWord, setRandomWord ] = useState([])

  const getWordRequest = async () => {
    const API = process.env.REACT_APP_API_KEY
    const url = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=${API}`

    const response = await fetch(url)
    const responseJson = await response.json()

    
   if(responseJson.word){
    setRandomWord(responseJson.word)
    
   }
  }
  useEffect(() => {
    getWordRequest()
  }, [])
  
  return (
    <div className="App">
      <div>
        hello
        {/* <h1>{randomWord}</h1> */}
        <WordResult randomWord={randomWord}/>
      </div>
    </div>
  );
}

export default App;
