import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Header() {
    const [{ basket ,user },dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>

        <a href="home"><h4 className="kabaka">Meraki</h4></a>

            <div className='header__search'>
                <input
                    className='header__searchInput'
                    type='text'
                />
                <SearchIcon
                    className='header__searchIcon'
                />
            </div>

          <div className="dropdown"  >
          <select>
      <option selected value="grapefruit">Mobile and Accessories</option>
        <option value="lime">Electronics and Accessories</option>
        <option value="lime">Computer and Accessories</option>
      <option value="lime">TV's and appliances</option>
      <option value="lime">Women fashion</option>
        <option value="lime">Men fashion</option>
          <option value="lime">Kids fashion</option>
            <option value="lime">Home and Kitchen</option>
              <option value="lime">Furniture</option>
                <option value="lime">Beauty & luxury products </option>
                    <option value="lime">Health and Household </option>
                        <option value="lime">Sports and Fitness</option>
                            <option value="lime">Bags wallet and luggage</option>
                                <option value="lime">Toys and games</option>
                                    <option value="lime">Beauty & luxury products </option>

      <option value="mango">Mango</option>
    </select>
    </div>

            <div className='header__nav'>
                 <Link to={!user && '/login'}>
                 <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'> {
                        (user?.email) || "Hello Guest"
                                }</span>
                    <span className='header__optionLineTwo'>{user ?'Sign Out':'Sign In' }</span>
                </div>
                 </Link>
               <Link to ='/orders'>
               <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
               </Link>
               <a  target="_blank" href ="https://www.primevideo.com/">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                </a>
                <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
                </Link>

            </div>
        </div>
    )
}
export default Header
