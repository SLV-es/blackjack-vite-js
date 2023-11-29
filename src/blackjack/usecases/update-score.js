export const updateScore = (quien, puntos, puntosHtml, points, cartasHtml, img) => {
  puntos[quien] += points;
  const score = puntos[quien] + ' puntos' + (quien===puntos.length-1) ? '' : '<br/>&nbsp;'
  puntosHtml[quien].innerHTML = score;
  cartasHtml[quien].appendChild(img);
}