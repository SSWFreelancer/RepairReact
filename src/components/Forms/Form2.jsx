import { InputMask } from "@react-input/mask";
import "./Form.scss";
import Button from "../Buttons/Button";
import { useState } from "react";
export default function Form2() {
  const [data, setData] = useState({
    name: "",
    number: "",
  });
  return (
    <form className="form">
      <div className="form__title">
        Рассчитайте стоимость ремонта и получите смету
      </div>
      <div className="form__text">
        Заполните Ваши контактные данные, чтобы мы могли Вам перезвонить,
        ответить на все Ваши вопросы и предоставить расчет
      </div>
      <div className="form__input">
        <p className="form__overtitle">Как к вам обращаться:</p>
        <input
          type="text"
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={data.name}
        />
      </div>
      <div className="form__input">
        <p className="form__overtitle">Ваш телефон:</p>
        <InputMask
          required
          type="tel"
          onChange={(e) =>
            setData((prev) => ({ ...prev, number: e.target.value }))
          }
          value={data.number}
          placeholder="+7 (999) 999-99-99"
          mask="+7 (___) ___-__-__"
          replacement={{ _: /\d/ }}
        />
      </div>
      <Button text="Получить расчет" />
      <div className="form__agree">
        Отправляя заявку, вы соглашаетесь c <br />
        <a href="#">политикой конфиденциальности</a>
      </div>
    </form>
  );
}
