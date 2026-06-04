# Ritmo Dance Club — React App

Веб-сайт танцювального клубу **Ritmo**, побудований на основі Figma-прототипів.

## Структура проєкту

```
src/
  App.jsx                  # Кореневий компонент, роутинг через useState
  main.jsx                 # Entry point
  styles/
    global.css             # CSS-змінні та базові стилі (дизайн-токени)
  components/
    Header.jsx / .css      # Фіксована навігація (4 посилання)
    Card.jsx   / .css      # Картка тренера (ініціали, теги, досягнення)
    Footer.jsx / .css      # CTA-секція + copyright
  pages/
    Home.jsx   / .css      # Головна: Hero, Переваги, Стилі танцю
    About.jsx  / .css      # Про клуб: Історія, Таймлайн, Цінності
    Trainers.jsx / .css    # Тренери: Картки через map()
    Contacts.jsx / .css    # Контакти: Форма з валідацією, Карта, Транспорт
```

## Запуск (Vite)

```bash
npm install
npm run dev
```

Відкрий `http://localhost:5173`

## Запуск (Create React App)

Якщо хочеш використовувати CRA:

```bash
npx create-react-app ritmo-dance-club
# Скопіюй вміст src/ та public/index.html
npm start
```

## Дизайн-система

| Токен               | Значення         | Опис                   |
|---------------------|------------------|------------------------|
| `--cream`           | `#f5f0eb`        | Фон (основний)         |
| `--blush`           | `#f0e6df`        | Блідо-рожевий          |
| `--terracotta`      | `#b85c38`        | Акцент (кнопки, теги)  |
| `--dark`            | `#1a1614`        | Темний текст           |
| `--font-display`    | Cormorant Garamond | Заголовки            |
| `--font-body`       | Jost             | Основний текст         |

## Функціональність

- **Навігація** — між 4 сторінками через `useState` (без react-router)
- **Форма контактів** — валідація полів через `useState`, success-стан
- **Список стилів** — hover-інтерактивність
- **Scroll-to-top** — при переході між сторінками

## Технології

- React 18 (функціональні компоненти + hooks)
- Vite 4
- CSS Modules (окремий .css для кожного компонента)
- Google Fonts (Cormorant Garamond + Jost)
