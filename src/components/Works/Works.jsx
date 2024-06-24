import Easy from "./Easy";
import OurWorks from "./OurWorks";
import "./Works.scss";
export default function Works({ openPopup }) {
  return (
    <div className="block">
      <Easy />
      <OurWorks openPopup={openPopup} />
    </div>
  );
}
