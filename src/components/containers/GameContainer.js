import React, { useState, useEffect }from 'react';
import '../../css/gameContainer.css';
import { NUMBER_OF_DECKS, NUMBER_OF_DRAWS, RESHUFFLE, ADD_TO_PILE, LIST_CARDS_IN_PILE, DRAW_CARD_FROM_PILE } from '../../lib/deckOfCardsAPI';
import axios from 'axios';

const GameContainer = () => {
  const [deck, setDeck] = useState({})
  const [draw, setDraw] = useState({})

  useEffect(() => {
    newDeck();
  },[])

  const newDeck = () => {
    axios.get(NUMBER_OF_DECKS + '1')
    .then(response => {
      setDeck(response.data)
    })
  }

  return(
    <div className='game-container'>
      Game Container
    </div>
  )
}

export default GameContainer;