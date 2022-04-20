const input = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const container = document.getElementById("memo-container")

addButton.onclick = function () {
  //入力の読み取り
  // console.log(input.value)
  //カードの追加

  const card = document.createElement("div")
  card.className = "card"
  card.textContent = input.value
  container.append(card)

  //空にする
  input.value = ""
}
