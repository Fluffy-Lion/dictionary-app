import React, { useState, useEffect } from 'react'
import './App.css';
import WordResult from './components/WordResult'
require('dotenv').config()

function App() {
  const [randomWord, setRandomWord ] = useState([])
  const [wordOfTheDay, setWordOfTheDay] = useState([])

  const API = process.env.REACT_APP_API_KEY

  const getWordRequest = async () => {
    
    const url = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=${API}`

    const response = await fetch(url)
    const responseJson = await response.json()

    
   if(responseJson.word){
    setRandomWord(responseJson.word)
    
   }else{
     console.log("fail")
   }
  }
 

  const getWordOfTheDay = async () => {

    const url = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${API}`

    const response = await fetch(url)
    const responseJson = await response.json()
    if(responseJson.word){
      setWordOfTheDay(responseJson.word)
    } else{
      console.log("word of the day fail")
    }
  }

  useEffect(() => {
    getWordOfTheDay()
  },[])
  useEffect(() => {
    getWordRequest()
  },[])
  
  return (
    <div className="App">
      <div>
        <h1>wordz</h1>
        
        <WordResult title="random word" word={randomWord}/>
        <WordResult title="word of the day" word={wordOfTheDay}/>
      </div>
    </div>
  );
}

export default App;
