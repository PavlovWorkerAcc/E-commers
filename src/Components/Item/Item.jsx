import React from 'react'

const Item = (props) => {
  const { item, onShowItem, onAdd, countOrder } = props;
  
  const handleClick = () => {
    onAdd(item);
    countOrder(item.count + 1);
  }

  return (
    <div className='item'>
      <img src={`./img/${item.img}`} onClick={() => onShowItem(item)}/>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className='addCart' onClick={handleClick}>+</div>
    </div>
  )
}

export default Item

