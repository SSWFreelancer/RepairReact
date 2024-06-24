import Title from "../Title/Title";
export default function Works() {
  return (
    <section className="easy">
      <div className="easy__container">
        <Title addClass="easy__title">Работать с нами - просто!</Title>
        <div className="easy__items">
          <div className="easy__item">
            <div className="easy__count">1</div>
            <div className="easy__text">
              <b>Вы оставляете заявку на сайте</b>
              <span>Наш менеджер перезванивает вам и уточняет детали</span>
            </div>
          </div>
          <div className="easy__item">
            <div className="easy__count">2</div>
            <div className="easy__text">
              <b>К вам выезжает замерщик</b>
              <span>Расчет стоимости занимает не больше 30 минут</span>
            </div>
          </div>
          <div className="easy__item">
            <div className="easy__count">3</div>
            <div className="easy__text">
              <b>Заключаем договор</b>
              <span>
                Подписывая договор с нами, вы автоматически получаете гарантию
                на наши услуги до 3-х лет
              </span>
            </div>
          </div>
          <div className="easy__item">
            <div className="easy__count">4</div>
            <div className="easy__text">
              <b>Выполняем ремонт</b>
              <span>
                Работы ведутся в строгом соответствии с графиком по договору
              </span>
            </div>
          </div>
          <div className="easy__item">
            <div className="easy__count">5</div>
            <div className="easy__text">
              <b>Сдаём объект</b>
              <span>
                Выполняем генеральную уборку и отдаем полностью законченный
                объект
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
