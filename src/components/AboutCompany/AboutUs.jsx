import Title from "../Title/Title";
export default () => {
  return (
    <section className="easy">
      <div className="easy__container">
        <Title addClass="easy__title">О нас</Title>
        <div className="easy__subtitle">
          Работаем с 2017 года. За это время сдали более 537 объектов.
          <br />
          Среди наших работ были как маленькие квартиры-студии так и большие
          коттеджи.
        </div>
        <div className="easy__items">
          <div className="easy__item">
            <div className="easy__count">1</div>
            <div className="easy__text">
              В договоре фиксируем все гарантии, смету и сроки
            </div>
          </div>
          <div className="easy__item">
            <div className="easy__count">2</div>
            <div className="easy__text">
              В штате только высококлассные мастера. У нас работают специалисты
              с опытом от 6 лет
            </div>
          </div>
          <div className="easy__item">
            <div className="easy__count">3</div>
            <div className="easy__text">
              Заранее согласовываем с вами план работ и сроки. В случае задержки
              – выплатим неустойку за просроченные дни
            </div>
          </div>
          <div className="easy__item">
            <div className="easy__count">4</div>
            <div className="easy__text">Каждому клиенту подарок на выбор</div>
          </div>
        </div>
      </div>
    </section>
  );
};
