
export default function Endmodal(){
    return (
        <div className = "modal end">
            <h2>congrats!</h2>
            <button onClick = {() => window.location.reload()}>
                New Game
            </button>
        </div>
    )
}