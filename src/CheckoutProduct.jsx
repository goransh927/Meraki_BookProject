import React, {forwardRef} from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
// import FlipMove from "react-flip-move";

const CheckOutProduct=forwardRef(({id,image,title,price,rating,hideButton},ref) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = (id) => {
        // remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div  ref={ref} key={id} className='checkoutProduct'>
              <img className="checkoutProduct__image" src={image} />

                <div className="checkoutProduct__info">
                        {/* <div className="checkoutProduct__infoTop"> */}
                            <p className="checkoutProduct__title">
                                        {title}
                            </p>
                <p className="checkoutProduct__price">
                        <small>MRP </small>
                        <strong>{price}</strong>
                </p>

                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_, i) => {
                                return (<p>⭐</p>)
                 })}
                        {/* </div> */}
                </div>
                {!hideButton && (
                    <button onClick={() => removeFromBasket(id)}>Remove</button>
                )}


</div>
        </div>
    )
})

export default CheckOutProduct
