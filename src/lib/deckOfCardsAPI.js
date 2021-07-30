
export const NUMBER_OF_DECKS = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=';
// response {
//   "success": true,
//   "deck_id": "islsssi4p5ad",
//   "remaining": 52,
//   "shuffled": true
//   }

export const NUMBER_OF_DRAWS = (deckId) => {
  return `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=`
} 
// response {
//   "success": true,
//   "cards": [
//       {
//           "image": "https://deckofcardsapi.com/static/img/KH.png",
//           "value": "KING",
//           "suit": "HEARTS",
//           "code": "KH"
//       },
//       {
//           "image": "https://deckofcardsapi.com/static/img/8C.png",
//           "value": "8",
//           "suit": "CLUBS",
//           "code": "8C"
//       }
//   ],
//   "deck_id":"3p40paa87x90",
//   "remaining": 50
// }

export const RESHUFFLE = (deckId) => {
  return `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`
}
// response {
//   "success": true,
//   "deck_id": "3p40paa87x90",
//   "shuffled": true,
//   "remaining": 52
// }

export const ADD_TO_PILE = (deckId, pileName) => {
  return `https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/add/?cards=`
}
// Note: This will not work with multiple decks.
// response {
//   "success": true,
//   "deck_id": "3p40paa87x90",
//   "remaining": 12,
//   "piles": {
//       "discard": {
//           "remaining": 2
//       }
//   }
// }

export const LIST_CARDS_IN_PILE = (deckId, pileName) => {
  return `https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/list/`
}
// Note: This will not work with multiple decks.
// {
//   "success": true,
//   "deck_id": "d5x0uw65g416",
//   "remaining": "42",
//   "piles": {
//       "player1": {
//           "remaining": "3"
//       },
//       "player2": {
//           "cards": [
//               {
//                   "image": "https://deckofcardsapi.com/static/img/KH.png",
//                   "value": "KING",
//                   "suit": "HEARTS",
//                   "code": "KH"
//               },
//               {
//                   "image": "https://deckofcardsapi.com/static/img/8C.png",
//                   "value": "8",
//                   "suit": "CLUBS",
//                   "code": "8C"
//               }
//           ],
//           "remaining": "2"
//       }
//   },
// }

export const DRAW_CARD_FROM_PILE = (deckId, pileName) => {
  return `https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/draw/?cards=`
}