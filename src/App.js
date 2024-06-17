import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenWindow, setIsOpenWindow] = useState(false);

  const [isRightLogin, setIsRightLogin] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  // todo need backend

  const [allLogins, setAllLogins] = useState([
    { login: "78183483498141", password: "889141" },
    { login: "89194983548389", password: "793910" },
  ]);

  const toggleModal = () => {
    setIsOpenWindow(!isOpenWindow);
  };

  const loginWrithing = (e) => {
    setLogin(e.target.value);
  };
  const passwordWrithing = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    allLogins.forEach((all) => {
      if (all.login === login && all.password === password) {
        setIsRightLogin(true);
      }
    });
  });

  const loginCheck = () => {
    if (isRightLogin) {
      setIsAdmin(true);
      setIsOpenWindow(false);
    } else {
      setIsRightLogin(false);
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
      {isOpenWindow && (
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
              <input
                type="text"
                value={password}
                onChange={passwordWrithing}
                className="login__input"
                placeholder="Введите пароль"
              />
              {isRightLogin === false ? (
                <p className="login__incorrect">Неверный логин или пароль</p>
              ) : (
                <></>
              )}
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
