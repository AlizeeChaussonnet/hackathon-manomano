import homepage from "../assets/image/screen-homepage.png";
import icon from "../assets/image/new-icon.png";
import { Link } from "react-router-dom";
import "../App.css";

export default function Homepage() {
  return (
    <div className="h-full">
      <img src={homepage} alt="" />
      <Link to="/inspiration">
        <div className="link-homepage">
          <img className="w-8" src={icon}></img>
          <p>Inspirations</p>
        </div>
      </Link>
    </div>
  );
}
