import {useState, createContext} from 'react';
import './App.css';
import Board  from './components/Board/Board';
import StartModal from './components/StartModal/StartModal'
import Header from './components/Header/Header'

export const PlayersContext = createContext("players")

function App() {

  const [gameStarted, setgameStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)


  const [playerNum, setplayerNum] = useState(1)
  const [playerTurn, setPlayerTurn] = useState(1)
  const [P1score, setP1score] = useState(0)
  const [P2score, setP2score] = useState(0)


  //stopwatch
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); 


  function choosePlayerNum(players){
    setgameStarted(true)
    setplayerNum(players)
  }

  const headerProps = {
    gameStarted: gameStarted,
    time:time,
    setTime: setTime,
    running: running
  }

  return (
    <div className="App">
      <PlayersContext.Provider value = {{playerNum, playerTurn, P1score, P2score}}>
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
      </PlayersContext.Provider>
    </div>
  );
}

export default App;
