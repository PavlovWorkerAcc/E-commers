import React from 'react';
import Item from '../Item/Item';

//Items passed values ​​from App
const Items = ({ items, onAdd, countOrder, onShowItem }) => (

  //passing functions to each item
  <main>
    {items.map(el => (
      <Item key={el.id} item={el} onAdd={onAdd} countOrder={countOrder} onShowItem={onShowItem} />
    ))}
  </main>
);

export default Items;
