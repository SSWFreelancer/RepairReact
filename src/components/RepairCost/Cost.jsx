import costimg1 from "/images/cost/1.png";
import costimg2 from "/images/cost/2.jpg";
import costimg3 from "/images/cost/3.jpeg";
import costimg4 from "/images/cost/4.jpg";
import "./Cost.scss";
import { useState } from "react";
import Button from "../Buttons/Button";
import Title from "../Title/Title";
export default function Cost({ openPopup }) {
  const [activeTab, setActiveTab] = useState("tab_01");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="cost" className="cost block graybg">
      <div className="cost__container">
        <Title>Стоимость ремонта</Title>
        <div className="cost__subtitle">
          Берем в работу проекты от 80 000₽ (не включая материал)
        </div>
        <div className="cost__wrapper">
          <nav className="cost__nav">
            <a
              onClick={() => handleTabClick("tab_01")}
              className={activeTab === "tab_01" ? "active" : ""}
            >
              Косметический
            </a>
            <a
              onClick={() => handleTabClick("tab_02")}
              className={activeTab === "tab_02" ? "active" : ""}
            >
              Черновой
            </a>
            <a
              onClick={() => handleTabClick("tab_03")}
              className={activeTab === "tab_03" ? "active" : ""}
            >
              Капитальный
            </a>
            <a
              onClick={() => handleTabClick("tab_04")}
              className={activeTab === "tab_04" ? "active" : ""}
            >
              Дизайнерский
            </a>
          </nav>
          <div
            id="tab_01"
            className={`cost__block ${activeTab === "tab_01" ? "target" : ""}`}
          >
            <div className="cost__image">
              <img src={costimg1} alt="" />
            </div>
            <div className="cost__column">
              <div className="cost__header">
                <p>Косметический </p> <p>от 5 дней</p>
              </div>
              <div className="cost__name">Стены</div>
              <ul className="cost__list">
                <li className="cost__link">Грунтовка поверхности</li>
                <li className="cost__link">Поклейка обоев</li>
                <li className="cost__link">Покраска стен</li>
                <li className="cost__link">Устранение мелких дефектов</li>
              </ul>
              <div className="cost__name">Пол</div>
              <ul className="cost__list">
                <li className="cost__link">Демонтаж старого покрытия</li>
                <li className="cost__link">Укладка подложки</li>
                <li className="cost__link">Монтаж напольного покрытия</li>
              </ul>
              <div className="cost__name">Ванная</div>
              <ul className="cost__list">
                <li className="cost__link">Замена сантехники</li>
              </ul>
              <div className="cost__name">Потолок</div>
              <ul className="tabs__list">
                <li className="cost__link">Шпаклевка</li>
                <li className="cost__link">Покраска потолка</li>
                <li className="cost__link">Монтаж натяжного потолка</li>
              </ul>
            </div>
            <div className="cost__column">
              <div className="cost__header hidden">
                <p>Косметический </p> <p>от 5 дней</p>
              </div>
              <div className="cost__name">
                Чистовые материалы <b>от 1 590 ₽/м2</b>
              </div>
              <ul className="cost__list">
                <li className="cost__link">Декоративные элементы</li>
                <li className="cost__link">Лакокрасочные материалы</li>
                <li className="cost__link">Напольные покрытия</li>
                <li className="cost__link">Реечный и натяжной потолок</li>
                <li className="cost__link">Стеновые материалы</li>
              </ul>
              <div className="cost__name">
                Черновые материалы <b>от 700 ₽/м2</b>
              </div>
              <ul className="cost__list">
                <li className="cost__link">Гипсокартон и профили</li>
                <li className="cost__link">Провода и трубы</li>
                <li className="cost__link">Строительные смеси</li>
              </ul>
              <div className="cost__cost">
                <p>Стоимость работ</p>
                <span>от 2 290 ₽/м2</span>
              </div>
              <Button openPopup={openPopup} text="Заказать" />
            </div>
          </div>
          <div
            id="tab_02"
            className={`cost__block ${activeTab === "tab_02" ? "target" : ""}`}
          >
            <div className="cost__image">
              <img src={costimg2} alt="" />
            </div>
            <div className="cost__column">
              <div className="cost__header">
                <p>Черновой </p> <p>от 3 дней</p>
              </div>
              <div className="cost__name">Стены</div>
              <ul className="cost__list">
                <li className="cost__link">Грунтовка поверхности</li>
                <li className="cost__link">Поклейка обоев</li>
                <li className="cost__link">Покраска стен</li>
                <li className="cost__link">Устранение мелких дефектов</li>
              </ul>
              <div className="cost__name">Пол</div>
              <ul className="cost__list">
                <li className="cost__link">Демонтаж старого покрытия</li>
                <li className="cost__link">Укладка подложки</li>
                <li className="cost__link">Монтаж напольного покрытия</li>
              </ul>
              <div className="cost__name">Ванная</div>
              <ul className="cost__list">
                <li className="cost__link">Замена сантехники</li>
              </ul>
              <div className="cost__name">Потолок</div>
              <ul className="tabs__list">
                <li className="cost__link">Шпаклевка</li>
                <li className="cost__link">Покраска потолка</li>
                <li className="cost__link">Монтаж натяжного потолка</li>
              </ul>
            </div>
            <div className="cost__column">
              <div className="cost__header hidden">
                <p>Черновой </p> <p>от 3 дней</p>
              </div>
              <div className="cost__name">
                Чистовые материалы <b>от 1 590 ₽/м2</b>
              </div>
              <ul className="cost__list">
                <li className="cost__link">Декоративные элементы</li>
                <li className="cost__link">Лакокрасочные материалы</li>
                <li className="cost__link">Напольные покрытия</li>
                <li className="cost__link">Реечный и натяжной потолок</li>
                <li className="cost__link">Стеновые материалы</li>
              </ul>
              <div className="cost__name">
                Черновые материалы <b>от 700 ₽/м2</b>
              </div>
              <ul className="cost__list">
                <li className="cost__link">Гипсокартон и профили</li>
                <li className="cost__link">Провода и трубы</li>
                <li className="cost__link">Строительные смеси</li>
              </ul>
              <div className="cost__cost">
                <p>Стоимость работ</p>
                <span>от 2 290 ₽/м2</span>
              </div>
              <Button openPopup={openPopup} text="Заказать" />
            </div>
          </div>
          <div
            id="tab_03"
            className={`cost__block ${activeTab === "tab_03" ? "target" : ""}`}
          >
            <div className="cost__image">
              <img src={costimg3} alt="" />
            </div>
            <div className="cost__column">
              <div className="cost__header">
                <p>Капитальный </p> <p>от 7 дней</p>
              </div>
              <div className="cost__name">Стены</div>
              <ul className="cost__list">
                <li className="cost__link">Грунтовка поверхности</li>
                <li className="cost__link">Поклейка обоев</li>
                <li className="cost__link">Покраска стен</li>
                <li className="cost__link">Устранение мелких дефектов</li>
              </ul>
              <div className="cost__name">Пол</div>
              <ul className="cost__list">
                <li className="cost__link">Демонтаж старого покрытия</li>
                <li className="cost__link">Укладка подложки</li>
                <li className="cost__link">Монтаж напольного покрытия</li>
              </ul>
              <div className="cost__name">Ванная</div>
              <ul className="cost__list">
                <li className="cost__link">Замена сантехники</li>
              </ul>
              <div className="cost__name">Потолок</div>
              <ul className="tabs__list">
                <li className="cost__link">Шпаклевка</li>
                <li className="cost__link">Покраска потолка</li>
                <li className="cost__link">Монтаж натяжного потолка</li>
              </ul>
            </div>
            <div className="cost__column">
              <div className="cost__header hidden">
                <p>Капитальный </p> <p>от 7 дней</p>
              </div>
              <div className="cost__name">
                Чистовые материалы <b>от 1 590 ₽/м2</b>
              </div>
              <ul className="cost__list">
                <li className="cost__link">Декоративные элементы</li>
                <li className="cost__link">Лакокрасочные материалы</li>
                <li className="cost__link">Напольные покрытия</li>
                <li className="cost__link">Реечный и натяжной потолок</li>
                <li className="cost__link">Стеновые материалы</li>
              </ul>
              <div className="cost__name">
                Черновые материалы <b>от 700 ₽/м2</b>
              </div>
              <ul className="cost__list">
                <li className="cost__link">Гипсокартон и профили</li>
                <li className="cost__link">Провода и трубы</li>
                <li className="cost__link">Строительные смеси</li>
              </ul>
              <div className="cost__cost">
                <p>Стоимость работ</p>
                <span>от 2 290 ₽/м2</span>
              </div>
              <Button openPopup={openPopup} text="Заказать" />
            </div>
          </div>
          <div
            id="tab_04"
            className={`cost__block ${activeTab === "tab_04" ? "target" : ""}`}
          >
            <div className="cost__image">
              <img src={costimg4} alt="" />
            </div>
            <div className="cost__column">
              <div className="cost__header">
                <p>Дизайнерский </p> <p>от 6 дней</p>
              </div>
              <div className="cost__name">Стены</div>
              <ul className="cost__list">
                <li className="cost__link">Грунтовка поверхности</li>
                <li className="cost__link">Поклейка обоев</li>
                <li className="cost__link">Покраска стен</li>
                <li className="cost__link">Устранение мелких дефектов</li>
              </ul>
              <div className="cost__name">Пол</div>
              <ul className="cost__list">
                <li className="cost__link">Демонтаж старого покрытия</li>
                <li className="cost__link">Укладка подложки</li>
                <li className="cost__link">Монтаж напольного покрытия</li>
              </ul>
              <div className="cost__name">Ванная</div>
              <ul className="cost__list">
                <li className="cost__link">Замена сантехники</li>
              </ul>
              <div className="cost__name">Потолок</div>
              <ul className="tabs__list">
                <li className="cost__link">Шпаклевка</li>
                <li className="cost__link">Покраска потолка</li>
                <li className="cost__link">Монтаж натяжного потолка</li>
              </ul>
            </div>
            <div className="cost__column">
              <div className="cost__header hidden">
                <p>Дизайнерский </p> <p>от 6 дней</p>
              </div>
              <div className="cost__name">
                Чистовые материалы <b>от 1 590 ₽/м2</b>
              </div>
              <ul className="cost__list">
                <li className="cost__link">Декоративные элементы</li>
                <li className="cost__link">Лакокрасочные материалы</li>
                <li className="cost__link">Напольные покрытия</li>
                <li className="cost__link">Реечный и натяжной потолок</li>
                <li className="cost__link">Стеновые материалы</li>
              </ul>
              <div className="cost__name">
                Черновые материалы <b>от 700 ₽/м2</b>
              </div>
              <ul className="cost__list">
                <li className="cost__link">Гипсокартон и профили</li>
                <li className="cost__link">Провода и трубы</li>
                <li className="cost__link">Строительные смеси</li>
              </ul>
              <div className="cost__cost">
                <p>Стоимость работ</p>
                <span>от 2 290 ₽/м2</span>
              </div>
              <Button openPopup={openPopup} text="Заказать" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
