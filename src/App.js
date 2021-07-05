import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <div className="card">
      {
        <WordCard value = "hello"/>
      }
    </div>
  );
}

export default App;

//test commit
