let text = document.queryselector("imput").value
function changeText() {
  // Получаем элемент по его id
  let element = document.getElementById("myElement");

  // Изменяем текст элемента
  element.innerHTML = "Beta";

  // Выводим новый текст элемента в консоль
  console.log(element.innerHTML);
}
