import React, { useState } from "react";
import "./Waiter.css";

import items from "../../api/data.json";
import dataTables from "../../api/tables.json";

import Categories from "../../components/Categories/Categories";
import Subcategories from "../../components/Subcategories/Subcategories";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import CustomOrder from "../../components/CustomOrder/CustomOrder";
import ButtonAddOrder from "../../components/ButtonAddOrder/ButtonAddOrder";
import OrderList from "../../components/OrderList/OrderList";


const allCategories = [...new Set(items.map((item) => item.category))];
const allTables = dataTables.map(dataTables => dataTables.table);

const Waiter = () => {
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [activeSubcategory, setActiveSubcategory] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [placeholder, setPlaceholder] = useState("Selecciona una mesa");
  const [idProduct, setIdProduct] = useState("");
  const [itemTitle, setItemTitle] = useState("");
  const [toogleOrder, setToogleOrder] = useState(false);
  const [btnOrderCocina,setBtnOrderCocina] = useState([]);
  const [order, setOrder] = useState({
    amount: 0,
    item: '',
    price: 0,
    add: ''
  });

  const filterSubcategories = (category) => {
    setActiveCategory(category);
    const categoryItems = items.filter((item) => item.category === category);
    const currentSubcategory = [...new Set(categoryItems.map((item) => item.subcategory))];
    setSubcategories(currentSubcategory);
    return;
  };

  const filterItems = (subcategory) => {
    setActiveSubcategory(subcategory);
    const newItems = items.filter((item) => item.subcategory === subcategory);
    setMenuItems(newItems);
  };

  const changePlaceholder = (table) => {
    setPlaceholder(table);
  }

  const filterData = (item) =>{
    if (item.title === itemTitle){
      return item
    }
  }



  return (
    <div className="container">
      <Header></Header>
      <main>
        <div className="menu">
          <Categories
            items={categories}
            dPlaceholder={"Selecciona un menú"}
            filterItems={filterSubcategories}
          />
          <div className="sub-menu">
            <Subcategories
              subcategories={subcategories}
              activeSubcategory={activeSubcategory}
              filterItems={filterItems}
            />
            <Menu items={menuItems} buttonsVisible={!toogleOrder} setToogleOrder={setToogleOrder} setItemTitle={setItemTitle}/>
            {toogleOrder ?
            <CustomOrder
              id={idProduct}
              setToogleOrder={setToogleOrder}
              order={order}
              setOrder= {setOrder}
              firstTitle={itemTitle}
              items={items.filter(item => filterData(item))} /> : null}
          </div>
        </div>
        <div className="pedido">
          <Categories
            items={allTables}
            dPlaceholder={placeholder}
            filterItems={changePlaceholder}
          />
          <aside>
            <OrderList order={order} ></OrderList>
            <ButtonAddOrder message={"Joan Te amo"}/>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Waiter;
