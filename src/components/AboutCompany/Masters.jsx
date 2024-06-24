import Title from "../Title/Title";
export default () => {
  return (
    <section className="masters">
      <div className="masters__container">
        <Title addClass="masters__title">
          Вашим ремонтом будут заниматься опытные мастера
        </Title>
        <div className="masters__items">
          <div className="masters__item">
            <div className="masters__img">
              <img src="images/masters/1.png" alt="" />
            </div>
            <div className="masters__name">Александр</div>
            <div className="masters__info">Сметчик-замерщик</div>
            <div className="masters__text">
              Определяет стоимость строительство и помогает клиентам
              минимизировать затраты на ремонт и материалы
            </div>
          </div>
          <div className="masters__item">
            <div className="masters__img">
              <img src="images/masters/2.png" alt="" />
            </div>
            <div className="masters__name">Руслан</div>
            <div className="masters__info">Управляющий</div>
            <div className="masters__text">
              Контроль качества оказываемых услуг, взаимодействие с персоналом
            </div>
          </div>
          <div className="masters__item">
            <div className="masters__img">
              <img src="images/masters/3.png" alt="" />
            </div>
            <div className="masters__name">Владимир</div>
            <div className="masters__info">Плиточник</div>
            <div className="masters__text">
              Подготавливает поверхность стен. Проектирует схему раскладки
              плитки. Укладывает плитку по утвержденной схеме. Затирает швы,
              монтирует скрытые люки
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
