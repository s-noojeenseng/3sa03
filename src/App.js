
import './App.css';

import WordCard from './WordCard';

function App() {

  const words = ["hello", "love", "coffee"]
  var word = words[Math.floor(Math.random()*words.length)];

  return (
    <div>
      <h1>Hint: {word.length}-letter word</h1>
      {
        <WordCard value={word} />
      }
    </div>
  );
}

export default App;
