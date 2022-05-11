import './Card.css'
import { useContext } from 'react'
import { PlayersContext } from '../../App'

type Cat = {
    name:string,
    imgUrl: string,
    flipped: boolean,
    matched: boolean,
    position: number,
}

type CardProps = {
    cat: Cat,
    flipCard: Function,
    numOfFlippedCards: number,
    children?: React.ReactNode;
}

const Card = (props:CardProps):JSX.Element => {

    const {playerNum, playerTurn} = useContext(PlayersContext)
    
    const {
        cat,
        flipCard,
        numOfFlippedCards
    } = props

    function handleCardClick(): void{
        //prevent quick clicking
        if(numOfFlippedCards >= 2) return
        
        //prevents "cheating"
        if(cat.flipped || cat.matched) return //"matched" css class can be removed with devtools, so it prevents clicking matched cards again

        flipCard(cat.position)
    }

    return (
        <div className = {
            "card" +
            (cat.flipped ? " flipped" : "") +
            (cat.matched ? " matched" : "")
        }
            onClick = {handleCardClick}>
            <img src = {cat.imgUrl} alt = {cat.name}></img>
            <div className = {
                "card-cover " +
                ( playerNum === 2 ? playerTurn === 1 ? "" : "cover-p2": "")
                }>
            </div>
        </div>
    ) 
}

export default Card