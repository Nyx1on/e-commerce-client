import { useNavigate } from "react-router-dom";
import "../styles/cardItem.styles.scss";

const CardItem = ({ menu }) => {
  console.log(menu);
  let navigate = useNavigate();
  return (
    <>
      <div className="menu-item">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${menu.imageUrl})`,
          }}
          onClick={() => navigate(`/category/${menu.title}`)}
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
