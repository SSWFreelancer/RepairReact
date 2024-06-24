import "./Costs.scss";
import Title from "../Title/Title";
export default () => {
  return (
    <section className="costs block graybg">
      <div className="costs__container">
        <Title addClass="costs__title">Цены на отдельные виды услуг</Title>
        <div className="costs__content">
          <ul className="costs__list">
            <li className="costs__item-title">Черновые отделочные работы</li>
            <li className="costs__item">Грунтовка пола - от 60 руб/м2</li>
            <li className="costs__item">Грунтовка стен - от 65 руб/м2</li>
            <li className="costs__item">
              Зачистка стен (краска, шпатлевка) - от 180 руб/м2
            </li>
            <li className="costs__item">Штукатурка потолка - от 620 руб/м2</li>
            <li className="costs__item">Грунтовка потолка - от 85 руб/м2</li>
          </ul>
          <ul className="costs__list">
            <li className="costs__item-title">Чистовые отделочные работы</li>
            <li className="costs__item">Укладка ламината - от 490 руб/м2</li>
            <li className="costs__item">Окраска стен - от 240 руб/м2</li>
            <li className="costs__item">
              Облицовка плиткой стен - от 1250 руб/м2
            </li>
            <li className="costs__item">Оклейка стен обоями - от 390 руб/м2</li>
            <li className="costs__item">
              Укладка паркетной доски и подложки - от 770 руб/м2
            </li>
          </ul>
          <ul className="costs__list">
            <li className="costs__item-title">Электромонтажные работы</li>
            <li className="costs__item">
              Установка TV, телефонной, интернет точки - от 270 руб
            </li>
            <li className="costs__item">
              Монтаж распаечной коробки с комутацией - от 400 руб/шт
            </li>
            <li className="costs__item">
              Установка электроточки - от 245 руб/шт
            </li>
            <li className="costs__item">
              Установка и подключение Диф Автомата - от 590 руб/шт
            </li>
          </ul>
          <ul className="costs__list">
            <li className="costs__item-title">Сантехнические работы</li>
            <li className="costs__item">
              Монтаж и подключение умывальника - от 1095 руб/шт
            </li>
            <li className="costs__item">
              Монтаж и подключение унитаза - от 1030 руб/шт
            </li>
            <li className="costs__item">Установка ванны - от 3500 руб/шт</li>
            <li className="costs__item">
              Монтаж и подключение водонагревателя - от 2100 руб
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
