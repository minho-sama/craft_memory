import { useState, useEffect } from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import Stopwatch from './Stopwatch/Stopwatch'

export default function Header(props){
    const [record, setRecord] = useState(null)

    const {
        gameStarted,
        playerNum,
        time,
        setTime,
        running
    } = props

    useEffect(() => {
        const savedRecord = Number(localStorage.getItem("pr"))
        if(savedRecord){
            setRecord(savedRecord)
        }

        if(record === null){
            setRecord(Number.MAX_SAFE_INTEGER)
        }

        //checking if new record (1 player mode)
        if(time < record && time !== 0){ //time is 0 at initial rendering
            setRecord(time)
            localStorage.setItem("pr", time)
        }
    }, [running])

    if(gameStarted && playerNum === 1){
        return (
            <header>
                <Logo></Logo>
                <Stopwatch
                    time = {time}
                    setTime = {setTime}
                    running = {running}
                ></Stopwatch>
                {
                    localStorage.getItem("pr") && 
                    <div className = "record">
                        <p>Your record: </p>       
                        <span  className = "craft-red-text">{("0" + Math.floor((record / 60000) % 60)).slice(-2)}:</span>
                        <span  className = "craft-red-text">{("0" + Math.floor((record / 1000) % 60)).slice(-2)}:</span>
                        <span  className = "craft-red-text">{("0" + ((record / 10) % 100)).slice(-2)}</span>
                    </div>
                }
            </header>
        )
    }

    if(gameStarted && playerNum === 2){
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
