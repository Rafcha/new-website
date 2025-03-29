import { Link } from "react-router";

function Skills() {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rafcha - Skills</title>
  <link rel="stylesheet" href="../styles/style.css" />
  <main>
    <Link to={`/`} className="card__text">
      &lt;-- Вернуться
    </Link>
    <div className="container">
      <a href="https://www.rust-lang.org/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Rust</h2>
        <p className="card__text">Безопасный язык программирования</p>
      </a>
      <a href="https://www.w3schools.com/c/c_intro.php" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">C</h2>
        <p className="card__text">Старый язык программирования</p>
      </a>
      <a href="https://www.python.org/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Python</h2>
        <p className="card__text">Лёгкий язык программирования</p>
      </a>
      <a href="https://ecma-international.org/publications-and-standards/standards/ecma-262/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Javascript</h2>
        <p className="card__text">Язык программирования для веба</p>
      </a>
      <a href="https://www.typescriptlang.org/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Typescript</h2>
        <p className="card__text">Передалнный Javascript</p>
      </a>
      <a href="https://kernel.org/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">GNU/Linux</h2>
        <p className="card__text">Пингвинчик :)</p>
      </a>
      <a href="https://react.dev/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">React</h2>
        <p className="card__text">JS/TS фреймворк</p>
      </a>
      <a href="https://express.ms/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Express</h2>
        <p className="card__text">JS/TS фреймворк</p>
      </a>
      <a href="https://elysiajs.com/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">Elysia</h2>
        <p className="card__text">JS/TS фреймворк</p>
      </a>
      <a href="https://tokio.rs/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">tokio</h2>
        <p className="card__text">Штука для Rust'a)</p>
      </a>
      <a href="https://docs.rs/axum/latest/axum/" style={{ textDecoration: "none" }} className="card">
        <h2 className="card__title">axum</h2>
        <p className="card__text">Штука для Rust'a)</p>
      </a>
    </div>
    <p style={{ textAlign: "center" }} className="card__text">
      © Сайт был сделан Rafcha(мной)
    </p>
  </main>
</>
    );
}

export default Skills;