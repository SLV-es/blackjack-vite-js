export const sumCard = (carta) => {
  const points = ['J', 'Q', 'K'].includes(carta[0])
    ? 10 // figuras valen 10
    : carta[0] === 'A'
    ? 11 // As vale 11
    : parseInt(carta); // valor de la carta
  return points;
};
