// type StartModalProps = {
//     choosePlayerNum: any,
//     setRunning: React.Dispatch<React.SetStateAction<boolean>>
// }

export const StartModal = (props) => {
    const {choosePlayerNum, setRunning} = props

    return <article className = "modal">
        <h2>Please choose the number of players</h2>
        <div>
            <button onClick = {() => {
                    choosePlayerNum(1)
                    setRunning(true)
                }}
                >1 PLAYER</button>
            <button onClick = { () => choosePlayerNum(2)}>2 PLAYERS</button>
        </div>
    </article>
}