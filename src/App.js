import React, { useState } from "react";
import items from "./api/data.json";
import "./App.css";
// import Categories from "./components/Categories";
import Categories from "./components/Categories/Categories";
import Subcategories from "./components/Subcategories/Subcategories";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";

const allCategories = [...new Set(items.map((item) => item.category))];

const App = () => {
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [activeSubcategory, setActiveSubcategory] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  const filterSubcategories = (category) => {
    setActiveCategory(category);
    const categoryItems = items.filter((item) => item.category === category);
    const currentSubcategory = [
      ...new Set(categoryItems.map((item) => item.subcategory)),
    ];
    setSubcategories(currentSubcategory);
    return;
  };

  const filterItems = (subcategory) => {
    setActiveSubcategory(subcategory);
    const newItems = items.filter((item) => item.subcategory === subcategory);
    setMenuItems(newItems);
  };

  return (
    <div className="container">
      <Header></Header>
      <main>
        <div className="menu">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterSubcategories={filterSubcategories}
          />
          <div className="sub-menu">
            <Subcategories
              subcategories={subcategories}
              activeSubcategory={activeSubcategory}
              filterItems={filterItems}
            />
            {<Menu items={menuItems} />}
          </div>
        </div>
        <div className="pedido"></div>
      </main>
    </div>
  );
};

export default App;
