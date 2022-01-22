import * as C from './styles'
import profilePic from '../../assets/image-avatar.png'
import iconCart from '../../assets/icon-cart.svg'
import iconDelete from '../../assets/icon-delete.svg'
import iconMenu from '../../assets/icon-menu.svg'
import iconClose from '../../assets/icon-close.svg'
import logo from '../../assets/logo.svg'
import { Context } from '../../contexts/CartContext'
import { useContext, useState } from 'react'

export const Header = () => {
    const { state, dispatch } = useContext(Context)
    const [cartIsOpen, setCartIsOpen] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const openCart = () => {
        setCartIsOpen(!cartIsOpen)
    }

    const handleDelete = () => {
        dispatch({
            type: 'CREATE_CART',
            payload: {
                img: '',
                name: '',
                price: 0,
                qt: 0,
                total: 0
            }
        })
    }

    return (
        <C.HeaderArea cart={cartIsOpen} menu={menuIsOpen}>
            <div className='container'>
                <nav>
                    <div className='menu--buttons'>
                        {!menuIsOpen &&
                            <img src={iconMenu} alt="" className='iconMenu' onClick={() => setMenuIsOpen(!menuIsOpen)}/>
                        }
                        {menuIsOpen &&
                            <img src={iconClose} alt="" className='iconMenu' onClick={() => setMenuIsOpen(!menuIsOpen)}/>
                        }
                        <img src={ logo } alt="" />
                    </div>
                    <ul className='nav--list'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className='profile'>
                    <img src={ iconCart } alt="" className='cart' onClick={openCart}/>
                    <img src={ profilePic } alt="" className='profile--picture'/>
                </div>
            </div>
            <div className='cart--area' >
                <div className='cart--title'>
                    Cart
                </div>
                {state.cart.qt !== 0 &&
                    <>
                        <div className='cart--content'>
                            <img src={state.cart.img} alt="shoe-pic" />
                            <div>
                               <p>{state.cart.name}</p>
                               <div className='cart--item'>
                                    <p>${state.cart.price}.00</p> <p>x{state.cart.qt}</p> <p className='total'>${state.cart.total}.00</p>
                                </div> 
                            </div>
                            <img src={iconDelete} alt="delete" className='delete' onClick={handleDelete}/>
                        </div>
                        <div className='checkout'>

                        </div>
                    </>
                }
                {state.cart.qt === 0 &&
                    <p className='empty'>
                        Your cart is empty
                    </p>
                }
            </div>
        </C.HeaderArea>
    )
}