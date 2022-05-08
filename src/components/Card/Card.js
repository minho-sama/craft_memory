import './Card.css'

export default function Card(props){
    
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
            <div className = "card-cover"></div>
        </div>
    ) 
}