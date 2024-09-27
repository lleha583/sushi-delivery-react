import './Basket.css'
import empty from '../../assets/img/basket_empty.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, minusProduct, plusProduct } from '../../store/basketSlice.ts'
import { IBasket, IState } from '../../interface/interface.ts'
import { Link } from 'react-router-dom'

type TProps = {
    setModal?: (value: number | null) => void
}

export default function Basket({ setModal }: TProps) {

    const dispath = useDispatch()
    const basket = useSelector((state: IState) => { return state.basket })

    if (basket.length === 0) {
        return (
            <div onClick={(e) => { e.stopPropagation() }} className={(setModal) ? 'basket' : 'basket_checkout'}>
                <div className='basket_empty'>
                    <img src={empty} alt="" width='140px' />
                    <h2>В вашей корзине пока пусто</h2>
                </div>
            </div>
        )
    }

    return (
        <div onClick={(e) => { e.stopPropagation() }} className={(setModal) ? 'basket' : 'basket_checkout'}>
            <div className='basket_header'>
                <h1>Ваш заказ</h1>
                {
                    (setModal && <button onClick={() => { setModal(null) }}>&#215;</button>)
                }
            </div>
            <div className='basket_block'>
                {

                    basket.map((item: IBasket, index: number) => {
                        return (
                            <div className={(setModal !== undefined) ? 'basket_block_product' : 'basket_block_product white'} key={index}>
                                <div>
                                    <img src={empty} />
                                    <h1>{item.name}</h1>
                                </div>
                                <div>
                                    <p className='basket_price'>{item.price}</p>
                                    <div>
                                        <button
                                            className='basket_btn'
                                            onClick={() => { dispath(minusProduct(index)) }}
                                        >-</button>
                                        <p className='basket_quantity'>{item.quantity}</p>
                                        <button
                                            className='basket_btn'
                                            onClick={() => { dispath(plusProduct(index)) }}
                                        >+</button>
                                    </div>
                                    <button
                                        className='basket_btn'
                                        onClick={() => { dispath(deleteProduct(index)) }}
                                    >&#215;</button>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
            {
                ((basket.length !== 0 && setModal !== undefined) &&
                    <div onClick={() => { if (setModal !== undefined) setModal(null) }} className='basket_bottom'>
                        <Link to={'checkout'} className='basket_btn_get'>оформить заказ</Link>
                    </div>)
            }
        </div>
    )
}