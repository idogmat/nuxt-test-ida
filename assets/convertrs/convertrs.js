export function changePrice(price){
  return price.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
export function capitalizeName(name) {
  let correctName2 = name.name.toString().toLowerCase()
  correctName2 = correctName2[0].toUpperCase() + correctName2.slice(1)
  let correctName = new Array(...correctName2)
  for (let i = 1; i < correctName.length - 1; i++) {
    if (correctName[i] === ' ' || correctName[i] === " " || correctName[i] > correctName.length) {
      correctName[i + 1] = correctName[i + 1].toUpperCase()
    }
  }
  return correctName.join('')
}
