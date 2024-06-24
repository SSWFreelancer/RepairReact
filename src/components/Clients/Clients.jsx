import "./Clients.scss";
import Title from "../Title/Title";
export default function Clients() {
  return (
    <section className="clients block yellowbg">
      <div className="clients__container">
        <Title addClass="clients__title">За что клиенты нас рекомендуют</Title>
        <div className="clients__items">
          <div className="clients__item">
            <div className="clients__icon">
              <img src="images/clients/1.svg" alt="" />
            </div>
            <div className="clients__name">
              Работаем оперативно и точно в срок
            </div>
            <div className="clients__text">
              Оставьте заявку на бесплатный вызов замерщика и он приедет уже
              завтра! Готовы начать ремонт через 1 день после подписания
              договора
            </div>
          </div>
          <div className="clients__item">
            <div className="clients__icon">
              <img src="images/clients/2.svg" alt="" />
            </div>
            <div className="clients__name">
              Точный расчет материалов - Вы не платите за остатки
            </div>
            <div className="clients__text">
              Производим точный расчет материалов и не оставляем остатков. Если
              остатки остались - мы их выкупаем
            </div>
          </div>
          <div className="clients__item">
            <div className="clients__icon">
              <img src="images/clients/3.svg" alt="" />
            </div>
            <div className="clients__name">
              Экономим Вам до 15% от стоимости материалов
            </div>
            <div className="clients__text">
              Мы закупаем материалы напрямую у производителя по оптовым скидкам
            </div>
          </div>
          <div className="clients__item">
            <div className="clients__icon">
              <img src="images/clients/4.svg" alt="" />
            </div>
            <div className="clients__name">Бесплатно убираем мусор</div>
            <div className="clients__text">
              Наши мастера сами уберут весь мусор и сделают генеральную уборку.
              При въезде вы получите чистую квартиру
            </div>
          </div>
          <div className="clients__item">
            <div className="clients__icon">
              <img src="images/clients/5.svg" alt="" />
            </div>
            <div className="clients__name">Оплата после приемки работ</div>
            <div className="clients__text">
              Вы платите за каждый этап работы после подписания акта
            </div>
          </div>
          <div className="clients__item">
            <div className="clients__icon">
              <img src="images/clients/6.svg" alt="" />
            </div>
            <div className="clients__name">Гарантия 3 года на наши услуги</div>
            <div className="clients__text">
              Даем гарантию на все виды работ: строительно-монтажные.
              отделочные, электрика, чистовые, сантехнические
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
