const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215)
  const hexCode = "#" + randomNumber.toString(16)
  document.body.style.background = hexCode
  btn.style.background = hexCode
  colorCode.innerText = hexCode
  navigator.clipboard.writeText(hexCode)
}

const btn = document.getElementById("btn")
const colorCode = document.getElementById("color-code")
btn.addEventListener("click", getColor)

getColor()
