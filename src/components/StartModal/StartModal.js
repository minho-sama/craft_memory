import "./StartModal.css"

export default function StartModal(props){
    const {choosePlayerNum} = props

    return <article className = "start-modal">
        <h2>Please choose the number of players</h2>
        <div>
            <button onClick = { () => choosePlayerNum(1)}>1 PLAYER</button>
            <button onClick = { () => choosePlayerNum(2)}>2 PLAYERS</button>
        </div>
    </article>
}