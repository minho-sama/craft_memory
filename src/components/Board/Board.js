import { useState, useEffect } from "react";
import "./Board.css"
import Card from "../Card/Card"

export default function Board() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    //fetch data, shuffle and create array
    useEffect(() => {
     fetch(`https://api.thecatapi.com/v1/breeds?limit=6`)
      .then((response) => response.json())
      .then(data => {

            //SHUFFLECARDS(data.concat(data))
          const cats = data.concat(data)
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

    //runs when player flips card
    //ha csak ez az egy function lesz benne akkor felesleges a useEffect es mehet handlecardflipbe
    //vagy pont h maradjon mert ez igy more expressive: side effectje annak, hogy flippelte a cardot
    // useEffect(() =>{
    //     console.log("loop over data array, if there is flipped, put it into flipped variable. if match then set to match. if 2 cards then settimeout -> flipped var lenullázni")
    //     compareCards()
    // }, [data])


    function compareCards(){

        const flippedCards =  [...data].filter(card => card.flipped)

        if(flippedCards.length < 2) {
            return
        }

        if(flippedCards[0].name === flippedCards[1].name){
            setTimeout(() => {
                flippedCards.forEach(card => setCardToMatched(card.position))
                flippedCards.forEach(card => flipCard(card.position))
            }, 1000)
            
        } else{
            setTimeout(() => {
                flippedCards.forEach(card => flipCard(card.position))
            }, 1000);
        }

        // setTimeouttal varázslat, pontot növelni, playerturn
    }

    function setCardToMatched(position){
        const cards = [...data]
        cards[position].matched = true
        setData(cards)
    }
   
    return (
        <section className = "board">
            {error && <div className = "err-msg">FAILED TO LOAD CATS</div>}
            {
            loading ? 
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