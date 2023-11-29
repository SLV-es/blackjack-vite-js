import {
  createDeck,
  orderCard,
  paintCard,
  sumCard,
  updateScreen as updateScore,
} from './usecases';

let deck = [],
  score = [],
  cardsHtml = [
    document.querySelector('#jugadorCartas'),
    document.querySelector('#bancaCartas'),
  ],
  scoreHtml = [
    document.querySelector('#jugadorPuntos'),
    document.querySelector('#bancaPuntos'),
  ],
  player = 0,
  dealer = 1; // último jugador es banca

const suits = 'C,D,H,S'.split(','), // tréboles, diamantes, corazones, espadas
  numbers = 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(','),
  btnOrder = document.querySelector('#btnPedir'),
  btnShuffle = document.querySelector('#btnBarajar'),
  btnDealer = document.querySelector('#btnDetener');

const initGame = (numPlayers = 1) => {
  for (let i = 0; i <= numPlayers; i++) {
    score[i] = 0;
    cardsHtml[i].innerHTML = '';
    scoreHtml[i].textContent = '';
    dealer = i; // último jugador es banca
  }
  btModoNuevoJuego(false);
  deck = createDeck(suits, numbers);
};

const play = (quien) => {
  const carta = orderCard(deck),
    img = paintCard(carta),
    points = sumCard(carta);
  updateScore(quien, score, scoreHtml, points, cardsHtml, img);
};

const playPlayer = () => {
  play(player);

  if (score[player] === 21) {
    scoreHtml[player].innerHTML +=
      ' <i class="bi bi-emoji-laughing-fill"></i>  HAS GANADO !!!';
    btModoNuevoJuego(true);
  }
  if (score[player] > 21) {
    scoreHtml[player].innerHTML +=
      ' <i class="bi bi-emoji-frown-fill"></i> HAS PERDIDO !!!';
    playDealer();
  }
};

const playDealer = () => {
  do {
    play(dealer);
  } while (score[dealer] < score[player] && score[player] <= 21);

  scoreHtml[player].innerHTML +=
    score[dealer] === score[player]
      ? ' <i class="bi bi-emoji-smile-upside-down-fill"></i> HEMOS EMPATADO !!!'
      : score[dealer] > 21
      ? ' <i class="bi bi-emoji-laughing-fill"></i> HAS GANADO !!!'
      : score[dealer] <= 21 && score[player] < score[dealer]
      ? ' <i class="bi bi-emoji-frown-fill"></i> HAS PERDIDO !!!'
      : '';

  btModoNuevoJuego(true);
};

const btModoNuevoJuego = (modo) => {
  btnShuffle.style.display = modo ? 'inline-block' : 'none';
  btnOrder.style.display = !modo ? 'inline-block' : 'none';
  btnDealer.style.display = !modo ? 'inline-block' : 'none';
};

btnShuffle.addEventListener('click', () => initGame());
btnOrder.addEventListener('click', () => playPlayer());
btnDealer.addEventListener('click', () => playDealer());

initGame();
