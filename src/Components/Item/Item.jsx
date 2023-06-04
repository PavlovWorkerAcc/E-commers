import React from 'react'

const Item = (props) => {
  const { item, onShowItem, onAdd, countOrder } = props;
  
  //Item OnClick Func add item to cart and item counter + 1
  const handleClick = () => {
    onAdd(item);
    countOrder(item.count++);
  }

  //Item Return
  return (
    <div className='item'>
      {/* item photo*/}
      <img src={`./img/${item.img}`} onClick={() => onShowItem(item)}/>

      {/* item title*/}
      <h2>{item.title}</h2>

      {/* item description*/}  
      <p>{item.desc}</p>

      {/* item price*/}  
      <b>{item.price}$</b>

      {/* item add to cart button*/} 
      <div className='addCart' onClick={handleClick}>+</div>
    </div>
  )
}

export default Item

