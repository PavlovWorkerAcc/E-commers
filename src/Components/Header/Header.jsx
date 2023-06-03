import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from '../Order/Order';

const ShowOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price * el.count) );
  return(
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} deleteCountOrder={props.deleteCountOrder} countOrder={props.countOrder} key={el.id} item={el}/>
      ))}
      <p className='sum'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  )
}

const ShowNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет :(</h2>
    </div>
  )
}

const Header = (props) => {
  const [cartOpen , setCartOpen] = useState(false)
  return (
    <header>
      <div className='Header_Bar'>
        <span className='logo'>
          Houser Staff
        </span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-btn ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? 
              <ShowOrders {...props} /> : <ShowNothing />}
          </div>
        )}
      </div>

      <div className='presentation'>

      </div>
    </header>
  )
}

export default Header;