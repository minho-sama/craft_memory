import React, { useState, useEffect, useContext } from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import Stopwatch from './Stopwatch/Stopwatch'
import {PlayersContext} from '../../App'

type HeaderProps = {
    gameStarted: boolean,
    time: number,
    setTime: React.Dispatch<React.SetStateAction<number>>, 
    running: boolean
}

const Header = (props:HeaderProps) => {
    const {playerNum, playerTurn, P1score, P2score} = useContext(PlayersContext);

    const [record, setRecord] = useState<number>(0)

    const {
        gameStarted,
        time,
        setTime,
        running
    } = props

    useEffect(() => {
        const savedRecord = Number(localStorage.getItem("pr"))
        if(savedRecord){
            setRecord(savedRecord)
        } else {
            setRecord(Number.MAX_SAFE_INTEGER)
        }

        //checking if new record (1 player mode)
        if(time < record && time !== 0){ //time is 0 at initial rendering
            setRecord(time)
            localStorage.setItem("pr", String(time))
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
                        <span  className = "craft-text red">{("0" + Math.floor((record / 60000) % 60)).slice(-2)}:</span>
                        <span  className = "craft-text red">{("0" + Math.floor((record / 1000) % 60)).slice(-2)}:</span>
                        <span  className = "craft-text red">{("0" + ((record / 10) % 100)).slice(-2)}</span>
                    </div>
                }
            </header>
        )
    }

    if(gameStarted && playerNum === 2){
        return (
            <header>
                <Logo></Logo>
                <div className = "playerturn">
                    PLAYER 
                    <span className={'craft-text ' + (playerTurn === 1 ? "blue" : "red")}>
                        {playerTurn}
                    </span>
                </div>
                <div className = "player-score-container">
                    <div> P1 SCORE
                        <span className='craft-text blue score'>   {P1score}</span>
                    </div>
                    <div> P2 SCORE 
                        <span className='craft-text red score'>   {P2score}</span>
                    </div>
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

export default Header