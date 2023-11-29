import _, { isArray } from 'underscore';

/**
 * Precisa de un array con los suits (palos) y otro con los numbers (números). Crea una baraja combinando ambos arrays y mezclando las cartas.
 * @param {string[]} suits ['C','D','H','S']
 * @param {string[]} numbers ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
 * @returns {string[]} baraja ['AC','AD','AH',....]
 */
export const createDeck = (suits, numbers) => {
  if (!suits || !isArray(suits) || suits.length === 0) throw new Error('suits debe ser un array de string')
  if (!numbers || !isArray(numbers) || numbers.length === 0) throw new Error('numbers debe ser un array de string')
  const deck = [];
  for (let palo of suits) {
    for (let numero of numbers) {
      deck.push(numero + palo);
    }
  }
  return _.shuffle(deck);
};
