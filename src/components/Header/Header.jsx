import "./Header.scss";
import Button from "../Buttons/Button";
import { useState, useEffect } from "react";

export default function Header({ openPopup }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle("lock", !menuActive);
  };
  const closeMenu = () => {
    setMenuActive(false);
    document.body.classList.remove("lock");
  };
  const handleClick = () => {
    openPopup();
    closeMenu();
  };

  return (
    <header className={scrolled ? "header scroll" : "header"}>
      <div className="header__container">
        <a href="#" className="header__logo">
          <img src="images/main/logo.png" alt="" />
        </a>
        <nav className={`menu ${menuActive ? "active" : ""}`}>
          <ul className="menu__list">
            <li className="menu__item">
              <a onClick={closeMenu} href="#cost" className="menu__link">
                Цены
              </a>
            </li>
            <li className="menu__item">
              <a onClick={closeMenu} href="#projects" className="menu__link">
                Проекты
              </a>
            </li>
            <li className="menu__item">
              <a
                onClick={closeMenu}
                href="#aboutcompany"
                className="menu__link"
              >
                О нас
              </a>
            </li>
            <li className="menu__item">
              <a onClick={closeMenu} href="#contacts" className="menu__link">
                Контакты
              </a>
            </li>
          </ul>
          <Button
            handleClick={handleClick}
            addClass="menu__btn"
            text="Бесплатный замер"
          />
        </nav>
        <Button
          openPopup={openPopup}
          addClass="header__btn"
          text="Бесплатный замер"
        />
        <div className="header__actions">
          <a href="tel:73471234567" className="header__tel">
            <span>+7 (347) 123-45-67</span>{" "}
            <img src="images/main/call.svg" alt="" />
          </a>
          <a href="#popup" onClick={openPopup} className="header__call">
            Заказать звонок
          </a>
          <a href="#" className="header__time">
            Ежедневно 08:00-22:00
          </a>
        </div>
        <div
          className={`header__burger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
}
