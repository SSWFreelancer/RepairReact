import "./Ways.scss";
import Button from "../Buttons/Button";
import Title from "../Title/Title";
export default ({ openPopup }) => {
  return (
    <section className="ways block yellowbg">
      <img src="images/ways/1.png" alt="" />
      <div className="ways__container">
        <Title addClass="ways__title">
          Хотите узнать 7 способов как сэкономить на ремонте до <span>30%</span>
          ?
        </Title>
        <div className="ways__subtitle">
          Укажите дату, когда вы планируете проводить ремонт и мы пришлем вам
          специальное предложение
        </div>
        <Button
          openPopup={openPopup}
          addClass="button-secondary"
          text="Получить чек-лист"
        />
      </div>
    </section>
  );
};
