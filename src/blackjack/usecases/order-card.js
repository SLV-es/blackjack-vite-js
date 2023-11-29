export const orderCard = (deck) => {
  if (deck.length === 0) {
    throw 'No quedan cartas en la baraja';
  }
  return deck.pop();
};
