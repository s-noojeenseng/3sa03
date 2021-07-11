
import './App.css';

import WordCard from './WordCard';

function App() {

  const words = ["hello", "love", "coffee"];
  var index = Math.floor(Math.random() * words.length);
  var word = words[index];
  var hint;

  switch (index) {
    case 0:
      hint = 'Hi'; break;
    case 1:
      hint = 'more than like'; break;
    case 2:
      hint = 'drinks'; break;
  }

  return (
    <div className="game">
      <h1>Hint: {hint}</h1>
      {
        <WordCard value={word} />
      }
      <button onClick={() => window.location.reload()}>Try Again!</button>
    </div>
  );
}

export default App;
