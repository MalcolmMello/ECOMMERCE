import * as C from './styles'
import product1 from '../../assets/image-product-1.jpg'
import product1thumb from '../../assets/image-product-1-thumbnail.jpg'
import product2 from '../../assets/image-product-2.jpg'
import product2thumb from '../../assets/image-product-2-thumbnail.jpg'
import product3 from '../../assets/image-product-3.jpg'
import product3thumb from '../../assets/image-product-3-thumbnail.jpg'
import product4 from '../../assets/image-product-4.jpg'
import product4thumb from '../../assets/image-product-4-thumbnail.jpg'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import next from '../../assets/icon-next.svg'
import previous from '../../assets/icon-previous.svg'
import { Context } from '../../contexts/CartContext'
import { useContext, useEffect, useState } from 'react'

export const Shoes = () => {
    const { state, dispatch } = useContext(Context)
    
    const price = 125
    
    const [isActive, setIsActive] = useState(0)

    const [numberSlide, setNumberSlide] = useState(0)

    const productsPics = [
        product1,
        product2,
        product3,
        product4
    ]

    const [slide, setSlide] = useState(product1)
    const [qt, setQt] = useState(0)
    const [total, setTotal] = useState(0)

    const showArrow = state.menu.open

    useEffect(()=>{
        setTotal(qt*price)
    },[qt])

    useEffect(() => {
        setSlide(productsPics[numberSlide])
    }, [numberSlide])

    const handlePlus = () => {
        setQt(qt + 1)
    }

    const handleMinus = () => {
        if(qt !== 0) {
            setQt(qt - 1)
        }
    }

    const handleAddToCart = () => {
        setQt(0)
        setTotal(0)
        if(state.cart.qt === 0) {
            dispatch({
                type: 'CREATE_CART',
                payload: {
                    img: product1thumb,
                    name: 'Fall Limited Edition Sneakers',
                    price,
                    qt,
                    total
                }
            })
        } else {
            const newTotal = state.cart.total + total
            const newQt = state.cart.qt + qt
            dispatch({
                type: 'UPDATE_CART',
                payload: {
                    qt: newQt,
                    total: newTotal
                }
            })
        }        
    }
    
    const handlePrevious = () => {
        if(numberSlide !== 0) {
            setNumberSlide(numberSlide - 1)
        }
    }

    const handleNext = () => {
        if(numberSlide !== 3) {
            setNumberSlide(numberSlide + 1)
        }
    }

    const openModal = () => {
        dispatch({
            type: 'DECIDE_MODAL',
            payload: {
                modalopen: true
            }
        })
    }

    const img1 = () => {
        setSlide(productsPics[0])
        setIsActive(0)
    }

    const img2 = () => {
        setSlide(productsPics[1])
        setIsActive(1)
    }

    const img3 = () => {
        setSlide(productsPics[2])
        setIsActive(2)
    }

    const img4 = () => {
        setSlide(productsPics[3])
        setIsActive(3)
    }

    return (
        <C.ShoesArea show={showArrow}>
            <div className='container'>
                <div className='shoes--pictures'>
                    <div className='mobile--pictures'>
                        <div className='left' onClick={handlePrevious}>
                            <img src={ previous } alt="previous" className='previous' />
                        </div>
                        <img src={ slide } alt="shoe image" className='main--picture' onClick={openModal}/>
                        <div className='right' onClick={handleNext}>
                            <img src={ next } alt="next" className='next' />
                        </div>
                    </div>
                    <div className='shoes--items'>
                        <img src={ product1thumb } className={isActive === 0 ? 'active' : ''} alt="shoe picture1" onClick={img1}/>
                        <img src={ product2thumb } className={isActive === 1 ? 'active' : ''} alt="shoe picture2" onClick={img2}/>
                        <img src={ product3thumb } className={isActive === 2 ? 'active' : ''} alt="shoe picture3" onClick={img3}/>
                        <img src={ product4thumb } className={isActive === 3 ? 'active' : ''} alt="shoe picture4" onClick={img4}/>
                    </div>
                </div>
                <div className='shoes--info'>
                    <p className='sneaker--company'>SNEAKER COMPANY</p>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p className='text'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <h1 className='price'>$125.00</h1>
                    <small><s>$250.00</s></small>
                    <div className='cart--actions'>
                        <div className='qt--item'>
                            <img src={minus} alt="minus" onClick={handleMinus}/>
                            <p>{qt}</p>
                            <img src={plus} alt="plus" onClick={handlePlus}/>
                        </div>
                        <div className='add--to--cart' onClick={handleAddToCart}>
                            <p>Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </C.ShoesArea>
    )
}