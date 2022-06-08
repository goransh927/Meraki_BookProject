import React, { useEffect } from 'react'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const promise=loadStripe('pk_test_51HQqWNL1MdFGhd4rittDHSEVwp3ELeE3RlJKSpvvbGZvumrVwnGMtnSGlDBvRnORnUkjemzr0YZ8d1aDF7IPHjAD00I8lmlNk9');


function App() {

    const [state, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      if(authUser) {
        // user is just logged in
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }else {
        // user logged out
        dispatch({
          type:"SET_USER",
          user: null
        })

      }
    })

    // fetch(`https://fakestoreapi.com/products/`)
    //   .then(res=>res.json())
    //   .then(productsArr=>{

    //     dispatch({
    //       type:"ADD_PRODUCTS",
    //       item: productsArr
    //     })

    //   })
    //   .catch(err => alert(err))

  },[])
    return (
    <Router>
        <div className='app'>
            <Switch>
               <Route path="/orders">
                    <Header />
                    <Orders />
                </Route>
                <Route path="/login">

                    <Login />
                </Route>
                <Route path="/checkout">
                    <Header />
                    <Checkout />
                </Route>
                <Route path="/payment">
                    <Header />
                    <Elements stripe={promise}>
                        <Payment />
                    </Elements>

                </Route>
                <Route path="/">
                    <Header />
                    <Home />
                </Route>


            </Switch>
        </div>
    </Router>
    )
}

export default App
