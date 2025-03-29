import { Link } from 'react-router'
import './App.css'

function App() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rafcha</title>
  <link rel="stylesheet" href="styles/style.css" />
  <header className="flex-head">
    <div className="flex-item">
      <img className="head-img" src="1721271874502.png" alt="avatar" width={'200px'} height={'250px'} />
    </div>
  </header>
  <main className="main-flex">
    <p>
      <span className="main-text">
        <span>Привет, я - Rafcha</span>
      </span>
    </p>
  </main>
  <p className="main-text2">
    Я начинающий fullstack/sys.admin разработчик из россии, часто делаю софт под
    GNU/Linux, стараясь также сделать доступным под windows ᓚᘏᗢ (под винду редко
    выходит))), также делаю сайты. Люблю рисовать аниме)
  </p>
  <p className="main-text2">ссылки:</p>
  <footer>
    <div className="container">
      <Link style={{ textDecoration: "none" }} className="card" to={'/Skills'}>
        <h2 className="card__title">Skills</h2>
        <p className="card__text">То что я знаю</p>
      </Link>
      <Link to={`/Projects`} style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Projects</h2>
        <p className="card__text">Мои проекты</p>
      </Link>
      <a href="https://t.me/rafchapw" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Communications</h2>
        <p className="card__text">Связь со мной</p>
      </a>
    </div>
    <p style={{ textAlign: "center" }} className="card__text">
      © Сайт был сделан Rafcha(мной)
    </p>
  </footer>
</>
  )
}

export default App
