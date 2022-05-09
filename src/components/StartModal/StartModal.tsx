import React from "react"

type StartModalProps = {
    choosePlayerNum: any,
    setRunning: React.Dispatch<React.SetStateAction<boolean>>,
    children?: React.ReactNode
}

export const StartModal = (props:StartModalProps):JSX.Element => {
    const {choosePlayerNum, setRunning} = props

    return <article className = "modal">
        <h2>Please choose the number of players</h2>
        <div>
            <button onClick = {():void => {
                    choosePlayerNum(1)
                    setRunning(true)
                }}
                >1 PLAYER</button>
            <button onClick = { ():void => choosePlayerNum(2)}>2 PLAYERS</button>
        </div>
    </article>
} 