
import React, { useState } from 'react';
import data from './data.json';

function App() {
  const [text, setText] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const wordEntry = data.find(item => item.word.toLowerCase() === text.toLowerCase());
    
    if (wordEntry) {
      setDefinition(wordEntry.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter a word"
        />
        <button type="submit">Search</button>
      </form>
     <h3>Definition:</h3>
      {definition && <p>{definition}</p>}
    </div>
  );
}

export default App;