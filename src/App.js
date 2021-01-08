import React, { useEffect } from 'react'
import './App.css';

require('dotenv').config()

function App() {

  const getWordRequest = async () => {
    const API = process.env.REACT_APP_API_KEY
    const url = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=${API}`

    const response = await fetch(url)
    const responseJson = await response.json()

    console.log(responseJson)
  }
  useEffect(() => {
    getWordRequest()
  }, [])
  
  return (
    <div className="App">
    
      app.js
    </div>
  );
}

export default App;
