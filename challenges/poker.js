/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {

  // make a bank in an obj of what the ranking is of different outcomes
  // make a flexible way of categorizing the hands where it takes ties into account

  let ranking = {};

  ranking.fourOfAKind = 7;
  ranking.fullHouse = 6;
  ranking.straight = 5;
  ranking.threeOfAKind = 4;
  ranking.twoPair = 3;
  ranking.onePair = 2;
  ranking.highCard = 1;

  if () {
    //4 of a Kind
  } 
  // else if X then full house
  // else if X then straight
  // else if X then three of a kind
  // else if X then two pair
  // else if X then one pair
  // else if X then high card

  // get ranking of hand 1 and compare with hand 2 
  if (hand1Points === hand2Points) {
    return Math.max(hand1) > Math.max(hand2) ? "Player 1 wins" : "Player 2 wins";
  }
  return hand1Points > hand2Points ? "Player 1 wins" : "Player 2 wins";

}

poker([4, 4, 4, 2, 14],[8, 8, 8, 4, 5]);

module.exports = poker;
