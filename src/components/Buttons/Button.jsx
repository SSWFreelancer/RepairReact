import "./Button.scss";
export default (props) => {
  const additionalClass = props.addClass ? ` ${props.addClass}` : "";
  const handleButtonClick = (event) => {
    if (props.openPopup) {
      props.openPopup(event);
    }
    if (props.handleClick) {
      props.handleClick(event);
    }
  };
  return (
    <button onClick={handleButtonClick} className={`button${additionalClass}`}>
      {props.text}
    </button>
  );
};
