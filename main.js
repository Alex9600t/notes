let text = document.querySelector("#input")

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
    text.value = document.cookie
  } else {
    alert("Данных не найдено")
  }
}