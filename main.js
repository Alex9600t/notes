let text = document.querySelector("#input")
let res = document.querySelector(".res")

const updateText = () => {
  text = document.querySelector("#input")
}

const saveText = () => {
  updateText()

  document.cookie = text.value
}

const loadText = () => {
  updateText()

  if (document.cookie) {
    res.textContent = document.cookie
    // text.value = document.cookie
  } else {
    alert("Данных не найдено")
  }
}