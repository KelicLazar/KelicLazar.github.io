import AngularIcon from "../skills/AngularIcon";
import CssIcon from "../skills/CssIcon";
import HtmlIcon from "../skills/HtmlIcon";
import JsIcon from "../skills/JsIcon";
import ReactIcon from "../skills/ReactIcon";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-gradient">
      <div className="header-container">
        <div className="header-text-container">
          <h1>Kelić</h1>
          <h1>Lazar</h1>

          <h2>
            Front-end <br /> Developer
          </h2>
          <div>
            <p>Crafting digital Magic with:</p>
            <div className="skill-container">
              <span>
                <HtmlIcon />
              </span>
              <span>
                <CssIcon />
              </span>
              <span>
                <JsIcon />
              </span>
              <span>
                <ReactIcon />
              </span>
              <span>
                <AngularIcon />
              </span>
              <span>
                <ReactIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
