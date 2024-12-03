async function getResponce() {
    // Отправляем запрос для получения данных из файла shop.json
    let responce = await fetch("shop.json");
    let content = await responce.json();

    // Обрезаем массив до первых 9 товаров
    content = content.slice(0, 9);

    // Получаем элемент с id="node_for_insert" для вставки данных
    let node_for_insert = document.getElementById("node_for_insert");

    // Перебираем все товары и добавляем их на страницу
    for (let key in content) {
        node_for_insert.innerHTML += `
        <li>
            <img src="${content[key].img}" alt="${content[key].name}">
            <h5>${content[key].name}</h5>
            <p>${content[key].description}</p>
            <p>Цена: ${content[key].price} р.</p>
            <input type="hidden" name="vendor_code" value="${content[key].vendor_code}">
            <p>Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
        `;
    }
}

getResponce();
