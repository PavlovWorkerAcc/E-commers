import React from 'react';
import { CgCloseO } from 'react-icons/cg';

const ShowFullItem = (props) => {
  const { item, onShowItem, onAdd, countOrder } = props;

  return (
    <div className='full-item'>
      <div className='full-item-content'>
        <div className='full-item-close'>
          <CgCloseO onClick={() => onShowItem(item)} />
        </div>
        <img src={`./img/${item.img}`} onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div
          className='addCart'
          onClick={() => {
            onAdd(item);
            countOrder(item.count++);
            onShowItem(item);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;