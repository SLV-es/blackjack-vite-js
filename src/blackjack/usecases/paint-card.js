export const paintCard = (carta) => {
  const img = new Image();
  img.src = `../assets/cartas/${carta}.png`;
  img.className = 'carta';
  img.alt = 'carta ' + carta;
  return img
};
