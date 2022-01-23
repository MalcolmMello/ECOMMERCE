import * as C from './styles'
import product1 from '../../assets/image-product-1.jpg'
import product1thumb from '../../assets/image-product-1-thumbnail.jpg'
import product2 from '../../assets/image-product-2.jpg'
import product2thumb from '../../assets/image-product-2-thumbnail.jpg'
import product3 from '../../assets/image-product-3.jpg'
import product3thumb from '../../assets/image-product-3-thumbnail.jpg'
import product4 from '../../assets/image-product-4.jpg'
import product4thumb from '../../assets/image-product-4-thumbnail.jpg'
import iconClose from '../../assets/icon-close.svg'
import next from '../../assets/icon-next.svg'
import previous from '../../assets/icon-previous.svg'
import { Context } from '../../contexts/CartContext' 
import { useContext, useState, useEffect } from 'react'

export const Modal = () => {
    const { state, dispatch } = useContext(Context)

    const [slide, setSlide] = useState(product1)

    const [numberSlide, setNumberSlide] = useState(0)

    const [isActive, setIsActive] = useState(0)

    const productsPics = [
        product1,
        product2,
        product3,
        product4
    ]

    useEffect(() => {
        setSlide(productsPics[numberSlide])
    }, [numberSlide])

    const handlePrevious = () => {
        if(numberSlide !== 0) {
            setNumberSlide(numberSlide - 1)
            setIsActive(isActive - 1)
        }
    }

    const handleNext = () => {
        if(numberSlide !== 3) {
            setNumberSlide(numberSlide + 1)
            setIsActive(isActive + 1)
        }
    }

    const closeModal = () => {
        dispatch({
            type: 'DECIDE_MODAL',
            payload: {
                modalopen: false
            }
        })
    }
    
    const img1 = () => {
        setSlide(productsPics[0])
        setNumberSlide(0)
        setIsActive(0)
    }

    const img2 = () => {
        setSlide(productsPics[1])
        setNumberSlide(1)
        setIsActive(1)
    }

    const img3 = () => {
        setSlide(productsPics[2])
        setNumberSlide(2)
        setIsActive(2)
    }

    const img4 = () => {
        setSlide(productsPics[3])
        setNumberSlide(3)
        setIsActive(3)
    }

    return (
        <C.ModalArea modal={state.modal.modalopen}>
            <div className='container'>
                <div className='shoes--pictures'>
                    <div className='close' onClick={closeModal}>
                        <img src={iconClose} alt="close modal" />
                    </div>
                    <div>
                    <div className='mobile--pictures'>
                        <div>
                            <img src={ previous } alt="previous" className='previous' onClick={handlePrevious}/>
                        </div>
                        <div>
                            <img src={ next } alt="next" className='next' onClick={handleNext}/>
                        </div>
                    </div>
                    <img src={ slide } alt="shoe image" className='main--picture'/>
                    </div>
                    <div className='shoes--items'>
                        <img src={ product1thumb } className={isActive === 0 ? 'active' : ''} alt="shoe picture1" onClick={img1}/>
                        <img src={ product2thumb } className={isActive === 1 ? 'active' : ''} alt="shoe picture2" onClick={img2}/>
                        <img src={ product3thumb } className={isActive === 2 ? 'active' : ''} alt="shoe picture3" onClick={img3}/>
                        <img src={ product4thumb } className={isActive === 3 ? 'active' : ''} alt="shoe picture4" onClick={img4}/>
                    </div>
                </div>
            </div>
        </C.ModalArea>
    )
}