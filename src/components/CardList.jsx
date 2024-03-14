import CardItem from "./CardItem";
import "../styles/cardList.styles.scss";

const CardList = ({ sections }) => {
  console.log(sections);
  return (
    <div className="directory-menu">
      {sections.map((menu) => (
        <CardItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default CardList;
