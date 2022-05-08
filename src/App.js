import {useState} from 'react';
import './App.css';
import Board  from './components/Board/Board';
import StartModal from './components/StartModal/StartModal'
import Header from './components/Header/Header'

function App() {

  const [gameOn, setGameOn] = useState(false)
  
  const [playerNum, setplayerNum] = useState(1)
  const [playerTurn, setPlayerTurn] = useState(1)


  function choosePlayerNum(players){
    setGameOn(true)
    setplayerNum(players)
  }

  const headerProps = {
    gameOn: gameOn,
    playerNum: playerNum,
    playerTurn: playerTurn
  }

  return (
    <div className="App">
      <Header {...headerProps}></Header>
      <article>
        {gameOn ? 
          <Board></Board> : 
          <StartModal choosePlayerNum = {choosePlayerNum}></StartModal>
          }
      </article>
    </div>
  );
}

export default App;
