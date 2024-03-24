
import React from 'react';
import productData from '../../assets/Data';
import './CartItems.css'
const CartItems = ({ items }) => {
  return (
    <div className='cartitems'>
        <div className='caritems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>

        {productData.map((e)=>{
            if(productData[e.id]>0)
            {
                return <div className='cartitems-format-main'>
                <img src='' className=''></img>
                <p>{e.name}</p>
                <p>{e.price}</p>
                <button className='cartitems-quantity'>{productData[e.id]}</button>
                <p>{e.price*productData[e.id]}</p>
                <img src=''></img>
            </div>
            }
        })}

        <button>PROCEED TO CHECKOUT</button>
        
        
    </div>
  );
};

export default CartItems;
