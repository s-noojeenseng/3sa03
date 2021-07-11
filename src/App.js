
import './App.css';

import WordCard from './WordCard';

function App() {

  const words = ["hello", "love", "coffee", "computer"]
  var word = words[Math.floor(Math.random()*words.length)];

  return (
    <div>
      {
        <WordCard value={word} />
      }
    </div>
  );
}

export default App;
