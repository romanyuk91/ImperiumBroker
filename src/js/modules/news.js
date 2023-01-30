function news() {
    
    if (document.querySelector('.news')) {

    class NewsItem {
        constructor(src, title, text, parentSelector) {
            this.src = src;
            this.title = title;
            this.text = text;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            let element = document.createElement('article');
            this.element = 'news-item';
            element.classList.add(this.element);

            element.innerHTML = `
                <div class="news-item-image">
                    <img src=${this.src} alt="image">
                </div>
                <div class="news-item-descr">
                    <h3 class="news-item-title title-3">${this.title}</h3>
                    <p class="news-item-text">${this.text}</p>
                </div>
            `;
            this.parent.append(element);
        }
    }

    // Кнопка "Показать еще"

    const showMore = document.querySelector('.news-button');
    let items = 4;
    showMore.addEventListener('click', function() {

        items += 4;
        const array = Array.from(document.querySelector('.news-list').children);
        const visItems = array.slice(0, items);
        visItems.forEach(item => {
            item.classList.add('is-visible');
        });
    });

    new NewsItem(
            "img/news/image1.jpg",
            'Семь американских банков в число...',
            `... которых входят Wells Fargo, Bank of America и JPMorgan, приняли решение создать цифровой кошелек.
            Они хотят, чтобы их клиенты могли расплачиваться в онлайн-магазинах привязанными к нему банковскими картами.
            Одной из основных целей создания цифрового кошелька — составить конкуренцию таким сервисам, как PayPal и Apple Pay.`,
            '.news .news-list'
        ).render();

    new NewsItem(
            "img/news/image2.jpg",
            'Семь американских банков в число...',
            `... которых входят Wells Fargo, Bank of America и JPMorgan, приняли решение создать цифровой кошелек.
            Они хотят, чтобы их клиенты могли расплачиваться в онлайн-магазинах привязанными к нему банковскими картами.
            Одной из основных целей создания цифрового кошелька — составить конкуренцию таким сервисам, как PayPal и Apple Pay.`,
            '.news .news-list'
        ).render();

    new NewsItem(
            "img/news/image3.png",
            'Moody`s создаст систему...',
            `... для оценки стейблкоинов. Готовят проект системы по анализу стейблкоинов, которая охватит 20 самых востребованных токенов.`,
            '.news .news-list'
        ).render();

    new NewsItem(
            "img/news/image4.jpg",
            'Polygon партнёрится Zengo',
            `ZenGo позиционирует себя как самый безопасный некастодиальный крипто-кошелек. Данное партнерство направлено на повышении безопасности Polygon.`,
            '.news .news-list',
    ).render();

    // ====================================================================================================

    new NewsItem(
        "img/news/image2.jpg",
        'Семь американских банков в число...',
        `... которых входят Wells Fargo, Bank of America и JPMorgan, приняли решение создать цифровой кошелек.
        Они хотят, чтобы их клиенты могли расплачиваться в онлайн-магазинах привязанными к нему банковскими картами.
        Одной из основных целей создания цифрового кошелька — составить конкуренцию таким сервисам, как PayPal и Apple Pay.`,
        '.news .news-list',
    ).render();

    new NewsItem(
        "img/news/image4.jpg",
        'Polygon партнёрится Zengo',
        `ZenGo позиционирует себя как самый безопасный некастодиальный крипто-кошелек. Данное партнерство направлено на повышении безопасности Polygon.`,
        '.news .news-list',
    ).render();

    new NewsItem(
        "img/news/image1.jpg",
        'Семь американских банков в число...',
        `... которых входят Wells Fargo, Bank of America и JPMorgan, приняли решение создать цифровой кошелек.
        Они хотят, чтобы их клиенты могли расплачиваться в онлайн-магазинах привязанными к нему банковскими картами.
        Одной из основных целей создания цифрового кошелька — составить конкуренцию таким сервисам, как PayPal и Apple Pay.`,
        '.news .news-list',   
    ).render();

    new NewsItem(
        "img/news/image3.png",
        'Moody`s создаст систему...',
        `... для оценки стейблкоинов. Готовят проект системы по анализу стейблкоинов, которая охватит 20 самых востребованных токенов.`,
        '.news .news-list',
    ).render();

    new NewsItem(
        "img/news/image1.jpg",
        'Семь американских банков в число...',
        `... которых входят Wells Fargo, Bank of America и JPMorgan, приняли решение создать цифровой кошелек.
        Они хотят, чтобы их клиенты могли расплачиваться в онлайн-магазинах привязанными к нему банковскими картами.
        Одной из основных целей создания цифрового кошелька — составить конкуренцию таким сервисам, как PayPal и Apple Pay.`,
        '.news .news-list',   
    ).render();
}
}


export default news;