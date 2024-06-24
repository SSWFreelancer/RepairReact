import "./Contacts.scss";
export default function Contacts() {
  return (
    <div id="contacts" className="contacts">
      <div className="contacts__container">
        <div className="contacts__body">
          <div className="contacts__title">Контакты</div>
          <a href="tel:83471234567" className="contacts__number">
            8 347 123 45 67
          </a>
          <div className="contacts__info">
            <p>г. Уфа, ул. Бикбая, д. 44a</p>
            <a href="mailto:adress@mail.ru">adress@mail.ru</a>
          </div>
        </div>
      </div>
      <div className="contacts__map">
        <iframe src="https://yandex.uz/map-widget/v1/?ll=56.060777%2C54.761629&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMTQxODY2MjU3EnHQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvSwg0KPRhNCwLCDRg9C70LjRhtCwINCR0LDRj9C30LjRgtCwINCR0LjQutCx0LDRjywgNDTQkCIKDdtFYEIVowtbQg%2C%2C&z=14.88"></iframe>
      </div>
    </div>
  );
}
