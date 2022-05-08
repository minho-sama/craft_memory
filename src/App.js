import {useState} from 'react';
import './App.css';
import Board  from './components/Board/Board';
import StartModal from './components/StartModal/StartModal'
import Header from './components/Header/Header'

function App() {

  const [gameOn, setGameOn] = useState(false)

  const [playerNum, setplayerNum] = useState(1)
  const [playerTurn, setPlayerTurn] = useState(1)

  //stopwatch
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); 


  function choosePlayerNum(players){
    setGameOn(true)
    setplayerNum(players)
  }

  const headerProps = {
    gameOn: gameOn,
    playerNum: playerNum,
    playerTurn: playerTurn,
    time:time,
    setTime: setTime,
    running: running
  }

//STOPWATCH STUFF
//   <div className="buttons">
//   <button onClick={() => setRunning(true)}>Start</button>
//   <button onClick={() => setRunning(false)}>Stop</button>
//   <button onClick={() => setTime(0)}>Reset</button>       
// </div>

  return (
    <div className="App">
      <Header {...headerProps}></Header>
      <article>
        {gameOn ? 
          <Board></Board> : 
          <StartModal choosePlayerNum = {choosePlayerNum} setRunning = {setRunning}></StartModal>
          }
      </article>
    </div>
  );
}

export default App;
