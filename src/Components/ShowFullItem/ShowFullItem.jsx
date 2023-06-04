import React from 'react';
import { CgCloseO } from 'react-icons/cg';

//ShowFullItem passed values ​​from App
const ShowFullItem = (props) => {
  const { item, onShowItem, onAdd, countOrder } = props;

  return (
    
    <div className='full-item'>
      <div className='full-item-content'>

        {/* ShowFullItem Close Button*/}
        <div className='full-item-close'>
          <CgCloseO onClick={() => onShowItem(item)} />
        </div>

        {/* ShowFullItem Product Photo*/}
        <img src={`./img/${item.img}`} onClick={() => onShowItem(item)} />

        {/* ShowFullItem title*/}
        <h2>{item.title}</h2>

        {/* ShowFullItem description*/}
        <p>{item.desc}</p>

        {/* ShowFullItem price*/}
        <b>{item.price}$</b>

        {/* ShowFullItem func add to cart , item counter + 1 and close modal after adding item*/}
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