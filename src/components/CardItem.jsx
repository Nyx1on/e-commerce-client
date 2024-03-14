import { useNavigate } from "react-router-dom";
import "../styles/cardItem.styles.scss";

const CardItem = ({ menu }) => {
  let navigate = useNavigate();
  return (
    <>
      <div
        className="menu-item"
        onClick={() => navigate(`/category/${menu.routeName}`)}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${menu.titleImgUrl})`,
          }}
        />
        <div className="content">
          <div className="title">{menu.title.toUpperCase()}</div>
          <div className="subtitle">SHOP NOW</div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
