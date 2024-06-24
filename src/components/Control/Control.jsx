import Title from "../Title/Title";
import "./Control.scss";
export default function Control() {
  return (
    <section className="control block graybg">
      <div className="control__container">
        <Title addClass="control__title">
          Контролируйте ремонт: с первого дня Вы будете в курсе всех процессов
        </Title>
        <div className="control__body">
          <ul className="control__list">
            <li className="control__item">
              <div className="control__item-img">
                <img src="images/control/1.png" alt="" />
              </div>
              <p>
                С нашими специалистами вы будете на связи в WhatsApp, Viber,
                Telegram или E-mail
              </p>
            </li>
            <li className="control__item">
              <div className="control__item-img">
                <img src="images/control/2.png" alt="" />
              </div>
              <p>
                Наши мастера будут регулярно присылать вам фото и видео отчет
              </p>
            </li>
            <li className="control__item">
              <div className="control__item-img">
                <img src="images/control/3.png" alt="" />
              </div>
              <p>
                На каждом этапе работы вы получите комментарии от мастера или
                дизайнера
              </p>
            </li>
            <li className="control__item">
              <div className="control__item-img">
                <img src="images/control/4.png" alt="" />
              </div>
              <p>
                В любой момент вы можете запросить фото или видео объекта, чтобы
                убедиться в качестве проводимых работ
              </p>
            </li>
          </ul>
          <div className="control__image">
            <img src="images/control/main.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
