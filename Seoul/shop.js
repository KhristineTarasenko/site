async function getResponce() {
    // Отправляем запрос для получения данных из файла shop.json
    let responce = await fetch("shop.json");
    console.log("responce:\n", responce, "\n /responce: \n");

    // Преобразуем ответ в текст
    let content = await responce.text();
    console.log("await responce.text()\n", content);

    // Преобразуем текст в объект JSON
    content = JSON.parse(content);

    // Обрезаем массив до первых 9 товаров
    content = content.slice(0, 9);
    console.log("content.slice(0, 9)", content);

    // Получаем элемент с id="node_for_insert" для вставки данных
    let node_for_insert = document.getElementById("node_for_insert");

    // Перебираем все товары и добавляем их на страницу
    for (let key in content) {
        // Добавляем HTML-код для каждого товара в список
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
            <img style="width: 180px" class="align-self-center" src="${content[key].img}" alt="${content[key].title}">
            <h5 class="card-title">${content[key].title}</h5>
            <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
            <input type="hidden" name="vendor_code" value="${content[key].vendor_code}">
            <p class="card-text">Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
        `;
    }
}

// Вызов функции для загрузки и отображения данных
getResponce();
