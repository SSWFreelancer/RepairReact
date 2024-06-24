import Form2 from "../Forms/Form2";
import "./Discount.scss";
import Title from "../Title/Title";
export default () => {
  return (
    <div className="discount block yellowbg">
      <div className="discount__container">
        <div className="discount__content">
          <Title addClass="discount__title">
            Скидки от <span>5% до 20%</span> на ремонт вторичного жилья
          </Title>
          <div className="discount__subtitle">
            Скидка зависит от типа Вашего дома и его расположения
          </div>
        </div>
        <Form2 />
      </div>
    </div>
  );
};
