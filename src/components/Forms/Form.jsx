import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import check from "/images/main/check.png";
import React, { useEffect, useRef, useState } from "react";
import { InputMask } from "@react-input/mask";
import "./Form.scss";
import Button from "../Buttons/Button";
export default function Form() {
  const sliderRef = useRef(null);
  const directionFieldRef = useRef(null);
  useEffect(() => {
    if (sliderRef.current && !sliderRef.current.noUiSlider) {
      noUiSlider.create(sliderRef.current, {
        start: [20],
        connect: [true, false],
        padding: [0, 0],
        step: 1,
        range: {
          min: 1,
          max: 250,
        },
      });
      sliderRef.current.noUiSlider.on("update", function (values, handle) {
        if (directionFieldRef.current) {
          directionFieldRef.current.innerHTML = parseFloat(values[handle]);
        }
      });
    }
    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, []);
  const [data, setData] = useState({
    name: "",
    number: "",
  });
  return (
    <form action="#" className="form">
      <div className="form__title">Рассчитайте стоимость ремонта</div>
      <div className="form__block">
        <div className="form__overtitle">Тип помещения:</div>
        <div className="form__checkbox">
          <input
            type="checkbox"
            name="checkbox1"
            value="Вторичка"
            id="checkbox1"
          />
          <label htmlFor="checkbox1">
            <span>
              <img src={check} alt="" />
            </span>
            <p>Вторичка</p>
          </label>
        </div>
        <div className="form__checkbox">
          <input
            type="checkbox"
            name="checkbox1"
            value="Новостройка"
            id="checkbox2"
          />
          <label htmlFor="checkbox2">
            <span>
              <img src={check} alt="" />
            </span>
            <p>Новостройка</p>
          </label>
        </div>
      </div>
      <div className="form__block">
        <div className="form__overtitle">Тип ремонта:</div>
        <div className="form__checkbox">
          <input
            type="checkbox"
            name="checkbox2"
            value="Капитальный"
            id="checkbox3"
          />
          <label htmlFor="checkbox3">
            <span>
              <img src={check} alt="" />
            </span>
            <p>Капитальный</p>
          </label>
        </div>
        <div className="form__checkbox">
          <input
            type="checkbox"
            name="checkbox2"
            value="Дизайнерский"
            id="checkbox4"
          />
          <label htmlFor="checkbox4">
            <span>
              <img src={check} alt="" />
            </span>
            <p>Дизайнерский</p>
          </label>
        </div>
        <div className="form__checkbox">
          <input
            type="checkbox"
            name="checkbox2"
            value="Косметический"
            id="checkbox5"
          />
          <label htmlFor="checkbox5">
            <span>
              <img src={check} alt="" />
            </span>
            <p>Косметический</p>
          </label>
        </div>
      </div>
      <div className="form__block">
        <div className="form__overtitle">
          Площадь квартиры: <span ref={directionFieldRef}>20</span> м
          <sup>2</sup>
        </div>
        <div className="form__range" ref={sliderRef}></div>
        <div className="form__startend">
          <p>
            1 м<sup>2</sup>
          </p>
          <p>
            250 м<sup>2</sup>
          </p>
        </div>
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
