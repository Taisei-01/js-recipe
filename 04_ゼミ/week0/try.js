setInterval(countUp, 10)

const display = document.getElementById("display")
let count = 0
const countUp = function () {
  count += 1

  display.textContent = count
}
