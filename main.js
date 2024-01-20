let text = document.querySelector("#input").value

const updateText = () => {
  text = document.querySelector("#input").value
}

const saveText = () => {
  updateText()

  document.cookie = text
}

const loadText = (text) => {
  updateText()

  if (document.cookie) {
    text = document.cookie
  } else {
    alert("Данных не найдено")
  }
}