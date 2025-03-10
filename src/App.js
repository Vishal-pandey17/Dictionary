import { useState } from "react";
import data from "./data.json";

function App() {
  const [text, setText] = useState("");
  const [defination, setDefination] = useState("");

  
  
  const calldata = (e) => {
    let found = false;
     e.preventDefault();
     data.forEach((item) => {
         if(item.word.toLowerCase() === text.toLowerCase()){
            setDefination(item.meaning);
            found=true;
         }
     });
     if (!found) {
          setDefination("Word not found in the dictionary.");
    }
  }

  return (
    <div >
       <h1>Dictionary App</h1>
       <form onSubmit={calldata}>
            <input 
              placeholder="Search for a word..."
              required
              onChange={(e) => setText(e.target.value)}
              type="text"
              value={text}
             />
         <button type="submit">Submit</button>
       </form>
       <h3>Definition:</h3>
       {defination && <p>{defination}</p>}
       
    </div>
  );
}

export default App;
