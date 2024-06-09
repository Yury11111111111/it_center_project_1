import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);

  // todo need backend

  const [allLogins, setAllLogins] = useState([
    "78183483498141",
    "12312412412463",
  ]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const loginWrithing = (e) => {
    setLogin(e.target.value);
    console.log(login);
  };

  const loginCheck = () => {
    if (allLogins.includes(login)) {
      setIsAdmin(true);
    } else {
      alert("Неверный логин");
    }
  };

  return (
    <div className="App">
      <header className="header">
        {isAdmin !== true ? (
          <button onClick={toggleModal} className="modal__button">
            Авторизация
          </button>
        ) : (
          <div className="header-placeholder"></div>
        )}
      </header>
      {isOpen && (
        <div className="modal">
          <div className="modal__content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <div className="modal__content-login">
              <input
                type="text"
                value={login}
                onChange={loginWrithing}
                className="login__input"
                placeholder="Введите логин"
              />
              <button onClick={loginCheck} className="login__button">
                Проверить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
