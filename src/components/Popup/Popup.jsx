import Form2 from "../Forms/Form2";
import "./Popup.scss";
export default function Popup({ isOpen, closePopup }) {
  return (
    <div id="popup" className={`popup ${isOpen ? "open" : ""}`}>
      <span className="popup__close" onClick={closePopup}></span>
      <div className="popup__content">
        <div className="popup__close"></div>
        <Form2 />
      </div>
    </div>
  );
}
