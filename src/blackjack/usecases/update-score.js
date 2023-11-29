export const updateScore = (quien, puntos, puntosHtml, points, cartasHtml, img) => {
  puntos[quien] += points;
  let score = puntos[quien] + ' puntos'
  if (quien===puntos.length-1) score += '<br/>&nbsp;'
  puntosHtml[quien].innerHTML = score;
  cartasHtml[quien].appendChild(img);
}