import React from 'react';

import './cart-Item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
   <img src={imageUrl} alt='item' />
   <div className='item-details'>
     <span className='name'>{name}</span>
     <span className='price'>
         {quantity} * ${price}
     </span>
   </div>
    </div>
);