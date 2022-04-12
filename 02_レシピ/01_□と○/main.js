const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")

circleButton.onmouseover = function () {
  // figure に rounded クラスを追加する
  figure.classList.add("rounded")
}

squareButton.onmouseover = function () {
  // figure から rounded クラスを削除する
  figure.classList.remove("rounded")
}

figure.onmouseover = function () {
  figure.classList.toggle("rounded")
}
