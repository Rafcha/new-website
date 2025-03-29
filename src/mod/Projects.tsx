import { Link } from "react-router"

function Projects() {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rafcha - projects</title>
  <link rel="stylesheet" href="../styles/style.css" />
  <main>
    <Link to={'/'} className="card__text">
      &lt;-- Вернуться
    </Link>
    <div className="container">
      <a href="https://github.com/Rafcha7957/rafchafetch" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">rafchafetch</h2>
        <p className="card__text">
          Мой fetch написанный на Rust написанный на говнокоде(винда там потому
          что для винды тестил, вы не подумаете там :D)
        </p>
      </a>
      <a href="https://github.com/Rafcha7957/rafnet" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">rafnet</h2>
        <p className="card__text">
          Спецаильная утилита для всякой сетевой фигни написанная на говнокоде
        </p>
      </a>
      <a href="https://github.com/Rafcha7957/zabrosheniy-website" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Старый сайт</h2>
        <p className="card__text">Мой старый сайт тоже вообще ужасный фу</p>
      </a>
      <a href="https://github.com/Rafcha7957/Backend-api-for-my-website" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Бэкенд старого сайта</h2>
        <p className="card__text">
          Старый бэк сайта, который я даже не доделал, а должен это быть блог),
          как руки дойдут допишу)
        </p>
      </a>
    </div>
    <p style={{ textAlign: "center" }} className="card__text">
      © Сайт был сделан Rafcha(мной)
    </p>
  </main>
</>
    )
}

export default Projects