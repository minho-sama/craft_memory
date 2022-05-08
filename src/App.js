import {useState} from 'react';
import './App.css';
import Board  from './components/Board/Board';
import StartModal from './components/StartModal/StartModal'
import Header from './components/Header/Header'

function App() {

  const [gameStarted, setgameStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)

  const [playerNum, setplayerNum] = useState(1)
  const [playerTurn, setPlayerTurn] = useState(1)

  //stopwatch
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); 


  function choosePlayerNum(players){
    setgameStarted(true)
    setplayerNum(players)
  }

  const headerProps = {
    gameStarted: gameStarted,
    playerNum: playerNum,
    time:time,
    setTime: setTime,
    running: running
  }

  return (
    <div className="App">
      <Header {...headerProps}></Header>
      <article>
        {gameStarted ? 
          <Board
            gameEnded = {gameEnded} 
            setGameEnded = {setGameEnded}
            setRunning = {setRunning}>
          </Board> : 
          <StartModal 
            choosePlayerNum = {choosePlayerNum} 
            setRunning = {setRunning}>
          </StartModal>
        }
      </article>
    </div>
  );
}

export default App;
