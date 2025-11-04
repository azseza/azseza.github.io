import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="Menu">
    <button className="Button" onClick={onClick}>
      Chill With Me
    </button>
  </div>
);

export default Menu;
