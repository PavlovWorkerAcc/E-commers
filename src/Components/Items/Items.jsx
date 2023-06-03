import React from 'react';
import Item from '../Item/Item';

const Items = ({ items, onAdd, countOrder, onShowItem }) => (
  <main>
    {items.map(el => (
      <Item key={el.id} item={el} onAdd={onAdd} countOrder={countOrder} onShowItem={onShowItem} />
    ))}
  </main>
);

export default Items;
