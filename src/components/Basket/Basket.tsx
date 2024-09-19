import Modal from '../Modal/Modal.tsx'
import './Basket.css'
import empty from '../../assets/img/basket_empty.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, minusProduct, plusProduct } from '../../store/basketSlice.ts'
import { IBasket } from '../../interface/interface.ts'

type TProps = {
    setModal: (value: number | null) => void
}

export default function Basket({ setModal }: TProps) {
    
    const basket = useSelector((state: {user: IDBRequestReadyState, basket: IBasket[]}) => {
        return state.basket
    })

    const dispath = useDispatch()

    return (
        <Modal setModal={setModal}>
            <div onClick={(e)=>{e.stopPropagation()}} className='basket'>
                <div className='basket_header'>
                    <h1>Ваш заказ</h1>
                    <button onClick={()=> {setModal(null)}}>&#215;</button>
                </div>
                <div className='basket_block'>
                {
                    (basket.length === 0) ? (
                        <div className='basket_empty'>
                            <img src={empty} alt="" width='140px'/>
                            <h2>В вашей корзине пока пусто</h2>
                        </div>
                    ) : (
                        basket.map((item: IBasket, index: number)=> {
                            return (
                                <div className='basket_block_product' key={index}>
                                    <div>
                                        <img src={empty} />
                                        <h1>{item.name}</h1>
                                    </div>
                                    <div>
                                        <p className='basket_price'>{item.price}</p>
                                        <div>
                                            <button className='basket_btn' onClick={()=>{dispath(minusProduct(index))}}>-</button>
                                            <p className='basket_quantity'>{item.quantity}</p>
                                            <button className='basket_btn' onClick={()=>{dispath(plusProduct(index))}}>+</button>
                                        </div>
                                        <button className='basket_btn' onClick={()=>{dispath(deleteProduct(index))}}>&#215;</button>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
                </div>
            </div>
        </Modal>
    )
}