import './Header.css'
import Logo from './Logo/Logo'
import Stopwatch from './Stopwatch/Stopwatch'

export default function Header(props){
    const {gameOn, playerNum, time, setTime, running, setRunning} = props

    if(gameOn && playerNum === 1){
        return (
            <header>
                <Logo></Logo>
                <Stopwatch
                    time = {time}
                    setTime = {setTime}
                    running = {running}
                ></Stopwatch>
                <div className = "record">Your record: 5</div>
            </header>
        )
    }

    if(gameOn && playerNum === 2){
        return (
            <header>
                <Logo></Logo>
                <div className = "playerturn">PLAYERTURN</div>
                <div className = "player-score-container">
                    <div>Player 1 score: </div>
                    <div>Player 2 score: </div>
                </div>
            </header>
        )
    }

    return (
        <>
        <header>
            <Logo></Logo>
        </header>
        </>
    )
}
