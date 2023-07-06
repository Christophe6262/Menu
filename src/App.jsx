import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import Title from "./Title";
import data from "./data.js";

const findCatgory = data.map((item) => item.category);
const tempSet = new Set(findCatgory);
const tempItems = ["all", ...tempSet];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(tempItems);

  const filterMenu = (cat) => {
    const filter = data.filter((food) => food.category === cat);

    if (cat === "all") {
      setMenu(data);
    } else {
      setMenu(filter);
    }
  };

  return (
    <main>
      <section className="menu">
        <Title title="Our menu" />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
