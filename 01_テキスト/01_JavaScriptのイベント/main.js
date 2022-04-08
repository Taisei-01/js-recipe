// button 要素と click イベント
const alertMessage = function () {
  alert("クリックしたね")
}

alertMessage() // アラートが表示される

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function () {
  console.log("hello")
}

inputText.oninput = sayHello
inputDate.oninput = sayHello
