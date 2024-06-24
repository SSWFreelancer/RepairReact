import "./Title.scss";
export default (props) => {
  const additionalClass = props.addClass ? ` ${props.addClass}` : "";
  return <div className={`title${additionalClass}`}>{props.children}</div>;
};
