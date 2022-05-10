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
    name: string,
    imgUrl: string,
    flipped: boolean,
    matched: boolean,
    position:number,
    flipCard: Function,
    data: Cat[],
    children?: React.ReactNode;
}

const Card = (props:CardProps):JSX.Element => {

    const {playerNum, playerTurn} = useContext(PlayersContext)
    
    const {
        name,
        imgUrl, 
        flipped, 
        matched, 
        position, 
        flipCard,
        data
    } = props

    function handleCardClick(): void{
        //prevent quick clicking
        if(data.filter((card:Cat) => card.flipped).length >= 2) return
        
        //prevents "cheating"
        if(flipped || matched) return //"matched" css class can be removed with devtools, so it prevents clicking on matched cards again

        flipCard(position)
    }

    return (
        <div className = {
            "card" +
            (flipped ? " flipped" : "") +
            (matched ? " matched" : "")
        }
            onClick = {() => handleCardClick() }>
            <img src = {imgUrl} alt = {name}></img>
            <div className = {
                "card-cover " +
                ( playerNum === 2 ? playerTurn === 1 ? "" : "cover-p2": "")
                }>
            </div>
        </div>
    ) 
}

export default Card