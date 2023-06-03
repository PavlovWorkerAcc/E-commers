import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Items from "./Components/Items/Items";
import Categorys from "./Components/Categotys/Categorys";
import ShowFullItem from "./Components/ShowFullItem/ShowFullItem";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Стул Серый",
      img: "chairG.webp",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      category: "chairs",
      price: "49.99",
      count: '0'
    },
    {
      id: 2,
      title: "Стол",
      img: "table.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      category: "tables",
      price: "149.99",
      count: '0'
    },
    {
      id: 3,
      title: "Лампа",
      img: "light.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      category: "light",
      price: "24.99",
      count: '0'
    },
    {
      id: 4,
      title: "Диван",
      img: "sofa.webp",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      category: "sofa",
      price: "549.99",
      count: '0'
    },
    {
      id: 5,
      title: "Стул Белый",
      img: "chairW.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      category: "chairs",
      price: "49.99",
      count: '0'
    }
  ]);
  const [currentItems, setCurrentItems] = useState(items);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id));
  };

  const countOrder = (count) => {
    setItems(items.filter(el => el.count));
    console.log(items);
  };

  const deleteCountOrder = (count) => {
    setOrders(orders.filter(el => count = count - count));
  };

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    });
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter(el => el.category === category));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} deleteCountOrder={deleteCountOrder} />
      <Categorys chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} countOrder={countOrder} />
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} countOrder={countOrder} onShowItem={onShowItem} />}
      <Footer />
    </div>
  );
}

export default App;
