import { useState, useEffect, useContext } from "react";
import "./Board.css"
import Card from "../Card/Card"
import Endmodal from "../Endmodal/Endmodal";
import {PlayersContext} from '../../App'

// type CatList = {
//         name:string,
//         imgUrl: string,
//         flipped: boolean,
//         matched: boolean,
//         position: number
//     }[]

// type Cat = {
//         name:string,
//         imgUrl: string,
//         flipped: boolean,
//         matched: boolean,
//         position: number,
// }

// type CatFromServer = {

// }

// type BoardProps = {
//     gameEnded: boolean,
//     setGameEnded: React.Dispatch<React.SetStateAction<boolean>>,
//     setRunning: React.Dispatch<React.SetStateAction<boolean>>
// }

const Board = (props) => {
    const {playerTurn, setPlayerTurn, setP1score, setP2score} = useContext(PlayersContext)
    const {gameEnded, setGameEnded, setRunning} = props

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    //fetch data, shuffle and create array
    useEffect(() => {
     fetch(`https://api.thecatapi.com/v1/breeds?limit=3`)
      .then((response) => response.json())
      .then(data => {

          const cats = shuffleCards(data.concat(data))
          .map( (cat, i) => ({
              name: cat.name, //instead of id
              imgUrl: cat.image.url,
              flipped: false,
              matched: false,
              position: i
          }))

          setData(cats)

        })
        .catch(err => {
            setError(err)
        })
        .finally(() => setLoading(false))
        
    }, []);

    function flipCard (position){
        const cards = [...data]
        cards[position].flipped = !cards[position].flipped
        setData(cards)

        compareCards()
    }
 
    function compareCards(){

        const flippedCards =  [...data].filter(card => card.flipped)

        if(flippedCards.length < 2) return

        if(flippedCards[0].name === flippedCards[1].name){
            setTimeout(() => {
                flippedCards.forEach(card => setCardToMatched(card.position))
                flippedCards.forEach(card => flipCard(card.position))

                //2 player mode
                playerTurn === 1 ?  setP1score(prevScore => prevScore+1) :  setP2score(prevScore => prevScore+1) 
            }, 1000)
            
        } else{
            setTimeout(() => {
                flippedCards.forEach((card) => flipCard(card.position))

                //2player mode
                setPlayerTurn(() => playerTurn === 1 ?  2 : 1)
            }, 1000);
        }

        // setTimeouttal varázslat, pontot növelni, playerturn
    }

    function setCardToMatched(position){
        const cards = [...data]
        cards[position].matched = true
        setData(cards)
    }

    //checking if game ends
    useEffect(() => {
        if(!loading && !data.filter(cat => !cat.matched).length){
            setGameEnded(true)
            setRunning(false) //stopping stopwatch

            //2 player mode

        }
    }, [data])
   
    return (
        <section className = "board">
            {error && <div className = "err-msg">FAILED TO LOAD CATS</div>}
            {
            loading && !gameEnded ? 
                <p>"loading..."</p> :  
                <>{data.map( cat => {
                    return (
                        <Card 
                            name = {cat.name} 
                            imgUrl = {cat.imgUrl} 
                            flipped = {cat.flipped}
                            matched = {cat.matched}
                            position = {cat.position}
                            flipCard = {flipCard}
                            data = {data}
                            key = {cat.position}>
                        </Card>
                    )
                    })}
                </>
            }
            {
                gameEnded && <Endmodal></Endmodal>
            }
        </section>
    )
   }

   function shuffleCards (cards){
    for (var i = 0; i < cards.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards
}

export default Board