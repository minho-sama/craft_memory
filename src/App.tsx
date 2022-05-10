import React, {useState, createContext} from 'react';
import './App.css';
import Board  from './components/Board/Board';
import {StartModal} from './components/StartModal/StartModal'
import Header from './components/Header/Header'

// type OneTwo = 1|2

type PlayersContextTypes = {
  playerNum: number, //1|2
  playerTurn: number, //1|2
  P1score: number,
  P2score: number,
  setPlayerTurn: React.Dispatch<React.SetStateAction<number>>,
  setP1score: React.Dispatch<React.SetStateAction<number>>,
  setP2score: React.Dispatch<React.SetStateAction<number>>
}

const PlayersContextInitialState = {
  playerNum: 1,
  playerTurn: 1,
  P1score: 0,
  P2score: 0,
  setPlayerTurn: () => {},
  setP1score: () => {},
  setP2score: () => {}
}

export const PlayersContext = createContext<PlayersContextTypes>(PlayersContextInitialState)


const App = ():JSX.Element => {

  const [gameStarted, setgameStarted] = useState<boolean>(false)
  const [gameEnded, setGameEnded] = useState<boolean>(false)

  const [playerNum, setplayerNum] = useState<number>(1) //1|2
  const [playerTurn, setPlayerTurn] = useState<number>(1) //1|2
  const [P1score, setP1score] = useState<number>(0) 
  const [P2score, setP2score] = useState<number>(0)


  //stopwatch states
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false); 

  function choosePlayerNum(players:1|2): void{ //1|2
    setgameStarted(true)
    setplayerNum(players)
  }

  const headerProps = {
    gameStarted: gameStarted,
    time:time,
    setTime: setTime,
    running: running,
    gameEnded: gameEnded
  }

  return (
    <div className="App">
      <PlayersContext.Provider value = {{playerNum, playerTurn, P1score, P2score, setPlayerTurn, setP1score, setP2score}}>
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
