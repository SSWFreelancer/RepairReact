import Button from "../Buttons/Button";
export default function OurWork({ openPopup }) {
  return (
    <div className="our-works__item swiper-slide">
      <div className="our-works__image">
        <img src="images/our-works/1.png" alt="" />
      </div>
      <div className="our-works__item-title">
        Дизайнерский ремонт 2-х комнатной квартиры
      </div>
      <div className="our-works__texts">
        <p>Площадь - 71 м 2</p>
        <p>Время ремонта - 2,5 месяца</p>
        <p>
          Стоимость работы: <span>568 000 ₽</span>
        </p>
        <p>
          Материалы:<span> 477 000 ₽</span>
        </p>
      </div>
      <Button openPopup={openPopup} text="Подробнее" />
    </div>
  );
}
