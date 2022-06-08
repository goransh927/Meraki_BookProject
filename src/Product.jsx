import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {

    const [{ basket },dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
               <p className='product__price'>
               {price}
               </p>
                <div className='product__rating'>


                </div>
            </div>
            <img className='product__image' src={image} />
<button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

export default Product
