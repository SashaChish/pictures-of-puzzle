export default function shuffle(arr) {
  let j, temp
  const newArray = [...arr]

  for (let i = newArray.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = newArray[j]
    newArray[j] = newArray[i]
    newArray[i] = temp
  }

  return newArray
}
