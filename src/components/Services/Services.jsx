import "./Services.scss";
import Button from "../Buttons/Button";
import Title from "../Title/Title";
export default function Services({ openPopup }) {
  return (
    <section className="services block">
      <div className="services__container">
        <Title addClass="services__title">
          Мы бесплатно предоставляем следующие услуги
        </Title>
        <div className="services__items">
          <div className="services__item">
            <div className="services__img">
              <img src="images/service/1.png" alt="" />
            </div>
            <div className="services__name">
              Выезд замерщика и составление сметы
            </div>
            <div className="services__text">
              Наш инженер проведет все замеры и проконсультирует вас.
              <br />
              <br />В этот же день вы получите от нашего инженера полный расчет
              и подробную смету с учетом ваших пожеланий.
              <br />
              <br />
              Выезд инженера бесплатен и ни к чему вас не обязывает.
            </div>
            <Button
              openPopup={openPopup}
              addClass="services__btn"
              text="Вызвать замерщика"
            />
          </div>
          <div className="services__item">
            <div className="services__img">
              <img src="images/service/2.png" alt="" />
            </div>
            <div className="services__name">
              Анализ сметы от других компаний
            </div>
            <div className="services__text">
              Сомневаетесь в смете, которую Вам составила другая компания?
              <br />
              <br />
              Пришлите её нам!
              <br />
              <br />
              Мы бесплатно проанализируем её и подскажем Вам, какие ошибки и
              недочеты были совершены.
            </div>
            <Button
              openPopup={openPopup}
              addClass="services__btn"
              text="Получить анализ"
            />
          </div>
          <div className="services__item">
            <div className="services__img">
              <img src="images/service/3.png" alt="" />
            </div>
            <div className="services__name">
              Помощь в подборе и закупке материалов
            </div>
            <div className="services__text">
              Наш прораб бесплатно поедет вместе с вами в магазины, чтобы
              проконсультировать и помочь подобрать все необходимые материалы
              для чернового и чистового ремонта.
            </div>
            <Button
              openPopup={openPopup}
              addClass="services__btn"
              text="Получить консультацию"
            />
          </div>
          <div className="services__item">
            <div className="services__img">
              <img src="images/service/4.png" alt="" />
            </div>
            <div className="services__name">Экскурсия по нашим объектам</div>
            <div className="services__text">
              Убедитесь лично в высоком качестве нашей работы!
              <br />
              <br />
              Приглашаем вас посмотреть квартиры, которые находятся в процессе
              ремонта.
              <br />
              <br />
              Мы пришлем за вами автомобиль в удобное время и наш главный
              инженер проведет для вас экскурсию на объекте.
            </div>
            <Button
              openPopup={openPopup}
              addClass="services__btn"
              text="Записаться на экскурсию"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
