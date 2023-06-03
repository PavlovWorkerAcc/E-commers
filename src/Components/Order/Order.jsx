import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Order = ({ item, onDelete, deleteCountOrder }) => (
  <div className='item-order'>
    <img src={"./img/" + item.img} />
    <h2>{item.title}</h2>
    <b>{new Intl.NumberFormat().format(item.price * item.count)}$</b>
    <p className='item-count'>x {item.count}</p>
    <FaTrash className='delete-icon' onClick={() => {
      onDelete(item.id);
      deleteCountOrder(item.count = '0');
    }} />
  </div>
);

export default Order;
