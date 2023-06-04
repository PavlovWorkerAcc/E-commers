import React from 'react';

//Product obj categories
const Categorys = ({ chooseCategory }) => {
  const categories = [
    {
      key: 'all',
      name: 'Всё',
    },
    {
      key: 'chairs',
      name: 'Стулья',
    },
    {
      key: 'tables',
      name: 'Столы',
    },
    {
      key: 'sofa',
      name: 'Диваны',
    },
    {
      key: 'light',
      name: 'Лампы',
    }
  ];

  return (
    //Category selection
    <div className='categories'>
      {categories.map(el => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categorys;
