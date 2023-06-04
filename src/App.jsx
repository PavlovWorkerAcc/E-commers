import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Items from "./Components/Items/Items";
import Categorys from "./Components/Categotys/Categorys";
import ShowFullItem from "./Components/ShowFullItem/ShowFullItem";

const App = () => {
  /* array of products that have been added to the cart*/
  const [orders, setOrders] = useState([]);

  /* main array of product objects*/
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Стул Серый",
      img: "chairG.webp",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      category: "chairs",
      price: "49.99",
      count: "0"
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
  
  console.log(orders)
  /* function to define categories */
  const [currentItems, setCurrentItems] = useState(items);

  /* product modal status flag true = open , false = close */
  const [showFullItem, setShowFullItem] = useState(false);

  /* function to define the product that will be shown in the modal window */
  const [fullItem, setFullItem] = useState({});
  
  /* function delete item from cart */
  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id));
    
  };

  /* function to define item count */
  const countOrder = () => {
      setItems(items.filter(item => item.count))
  };

  /* function delet item count when item delete from cart */
  const deleteCountOrder = (count) => {
    setOrders(orders.filter(el => el.count !== count));
  };

  /* function add product to cart , checking the similarity of added products  */
  const addToOrder = (item) => {

    /* flag to cancel action */
    let isInArray = false;

    /* sorting the array of added products and checking the added product ID for similarity with the ID in the original array */
    orders.forEach(el => {
      if (el.id === item.id)
      /* if added product ID == ID of product in original array then flag takes the value true and does not add a product  */
        isInArray = true;
    });

    /* Сhecking flag value if !== true then add product to cart */
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  /* function choosing category */
  const chooseCategory = (category) => {
    /* Checking if category == all then return all products */
    if (category === "all") {
      setCurrentItems(items);
      return;
    }
      /* If category != all then return products by category name  */
      setCurrentItems(items.filter(el => el.category === category));
    }
    
  

  /* function to show modal window  */
  const onShowItem = (item) => {
    /* selected product  */
    setFullItem(item);

    /* opening modal window  */
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      {/* passing components in the header  */}
      <Header orders={orders} onDelete={deleteOrder} deleteCountOrder={deleteCountOrder} />

      {/* passing components in the categorys  */}
      <Categorys chooseCategory={chooseCategory} />

      {/* passing components in the Items  */}
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} countOrder={countOrder} />

      {/* passing components in the modal window  */}
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} countOrder={countOrder} onShowItem={onShowItem} />}

      <Footer />
    </div>
  );
}

export default App;
