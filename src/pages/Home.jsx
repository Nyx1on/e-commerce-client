import shopData from "../data/shop.data";
import CardList from "../components/CardList";
import "../styles/home.styles.scss";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <h1>Welcome to my HomePage</h1>
        <CardList sections={shopData} />
      </div>
    </>
  );
};

export default Home;
