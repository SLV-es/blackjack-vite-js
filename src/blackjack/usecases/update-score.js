export const updateScore = (quien, puntos, puntosHtml, points, cartasHtml, img) => {
  puntos[quien] += points;
  puntosHtml[quien].textContent = puntos[quien] + ' puntos';
  cartasHtml[quien].appendChild(img);
}