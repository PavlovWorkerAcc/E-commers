import React from 'react';

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
