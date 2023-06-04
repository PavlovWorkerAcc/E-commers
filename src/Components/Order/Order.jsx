import React from 'react';
import { FaTrash } from 'react-icons/fa';

//Order window when there is a product in the cart
const Order = ({ item, onDelete, deleteCountOrder }) => (


  <div className='item-order'>
    {/* Order Photo*/}
    <img src={"./img/" + item.img} />

    {/* Order title*/}
    <h2>{item.title}</h2>

    {/* Order Price*/}
    <b>{new Intl.NumberFormat().format(item.price * item.count)}$</b>

    {/* Order Count*/}
    <p className='item-count'>x {item.count}</p>
    
    {/* Order Delet Icon*/}
    <FaTrash className='delete-icon' onClick={() => {
      onDelete(item.id);
      deleteCountOrder(item.count = '0');
    }} />
  </div>
);

export default Order;
