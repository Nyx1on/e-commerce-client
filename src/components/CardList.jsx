import CardItem from "./CardItem";
import "../styles/cardList.styles.scss";
import directory from "../data/directory.data";

const CardList = ({ sections }) => {
  const itemSections = sections.map((section) => {
    const directoryEntry = directory.find((entry) => entry.id === section.id);
    if (directoryEntry) {
      return { ...section, titleImgUrl: directoryEntry.imageUrl };
    }
    return section;
  });
  return (
    <div className="directory-menu">
      {itemSections.map((menu) => (
        <CardItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default CardList;
