import Form from "../Forms/Form";
import main1 from "/images/main/1.png";
import main2 from "/images/main/2.png";
import main3 from "/images/main/3.png";
import main4 from "/images/main/4.png";
import mainbg from "/images/main/bg.png";
import "./Main.scss";
export default function Main() {
  return (
    <main className="main">
      <div className="main__bg">
        <img src={mainbg} alt="" />
      </div>
      <div className="main__container">
        <div className="main__content">
          <h1 className="main__title">
            Ремонт и отделка квартир в Уфе<span> от 2290 ₽/м2</span>
          </h1>
          <div className="main__subtitle">
            Работаем по договору: <br /> c фиксированной стоимостью и сроками
            <p>
              <span>Берем в работу проекты от 80 000₽</span> <br />
              (не включая материал)
            </p>
          </div>
          <ul className="main__list">
            <li className="main__item">
              <div className="main__icon">
                <img src={main1} alt="" />
              </div>
              Бесплатный выезд замерщика в день обращения
            </li>
            <li className="main__item">
              <div className="main__icon">
                <img src={main2} alt="" />
              </div>
              Даем гарантию на свои работы до 3 лет
            </li>
            <li className="main__item">
              <div className="main__icon">
                <img src={main3} alt="" />
              </div>
              Регулярно присылаем фото и видеоотчет c объекта
            </li>
            <li className="main__item">
              <div className="main__icon">
                <img src={main4} alt="" />
              </div>
              Бесплатно убираем квартиру после ремонта
            </li>
          </ul>
        </div>
        <Form />
      </div>
    </main>
  );
}
