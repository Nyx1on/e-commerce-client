import shopData from "../data/shop.data";
import CardList from "../components/CardList";
import "../styles/home.styles.scss";
import FormInput from "../components/FormInput";
import { useState } from "react";

const Home = () => {
  const [sections, setSections] = useState(shopData);
  const handleChange = (e) => {
    const filter = e.target.value;
    setSections(() =>
      shopData.filter((sections) => {
        if (filter === "") {
          return sections;
        }
        return sections.title.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };
  return (
    <>
      <div className="homepage">
        <h1 style={{ fontSize: "2.5rem" }}>WELCOME TO URBAN KLOTH</h1>
        <span>
          Your ultimate destination for fashionable finds and trendy attire –
          the epitome of style awaits at our clothing store!
        </span>
        <FormInput
          placeholder="Search Category"
          type="text"
          name="search"
          handleChange={handleChange}
        />
        <CardList sections={sections} key={sections.id} />
      </div>
    </>
  );
};

export default Home;
