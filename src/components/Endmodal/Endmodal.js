import { useContext } from "react"
import { PlayersContext } from "../../App"

export default function Endmodal(){
    const {playerNum, P1score, P2score} = useContext(PlayersContext)
    //there is no draw, since there are odd number of pairs

    return (
        <div className = "modal end">
            <h2 className="craft-text blue">congrats!</h2>
            {
                playerNum === 2 
                && 
                <div className = "winner">
                    Player
                    <p className = {"craft-text " + (P1score > P2score ? "blue" : "red")}>
                        {P1score > P2score ? 1 : 2}
                    </p>
                    won!
                </div>
            }
            <button onClick = {() => window.location.reload()}>
                New Game
            </button>
        </div>
    )
}