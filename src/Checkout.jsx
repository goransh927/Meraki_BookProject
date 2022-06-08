import React from 'react'
import Subtotal from './Subtotal';
import './Checkout.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket ,user },dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img
                  className="checkout__ad"
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />
                <div className='checkout__hover'>

                    <img src="g1.png" className="g1"/>
                    <FlipMove>
                    {basket.map(item => (
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={parseInt((item.price)%5) || 5}
                        />
                    ))}
                    </FlipMove>
                </div>
            </div>
            <div className='checkout__right'>
            <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
