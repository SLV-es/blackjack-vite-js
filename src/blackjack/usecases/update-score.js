export const updateScore = (quien, puntos, puntosHtml, points, cartasHtml, img) => {
  puntos[quien] += points;
  puntosHtml[quien].innerHTML = puntos[quien] + ' puntos<br/>&nbsp;';
  cartasHtml[quien].appendChild(img);
}