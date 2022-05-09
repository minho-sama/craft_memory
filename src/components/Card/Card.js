import './Card.css'
import { useContext } from 'react'
import { PlayersContext } from '../../App'

export default function Card(props){

    const {playerTurn} = useContext(PlayersContext) //for css only
    
    const {
        name, 
        imgUrl, 
        flipped, 
        matched, 
        position, 
        flipCard,
        data
    } = props

    function handleCardClick(){
        //prevent quick clicking
        if(data.filter(card => card.flipped).length >= 2) return
        if(flipped) return
        flipCard(position)
    }

    return (
        <div className = {
            "card" +
            (flipped ? " flipped" : "") +
            (matched ? " matched" : "")
        }
            onClick = {() => handleCardClick() }>
            <img src = {imgUrl}></img>
            <div className = {
                "card-cover " +
                (playerTurn === 1 ? "" : "cover-p2")
                }>
            </div>
        </div>
    ) 
}