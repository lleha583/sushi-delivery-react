import Modal from '../Modal/Modal.tsx'
import './Basket.css'
import empty from '../../assets/img/basket_empty.png'
import { useState } from 'react'

export default function Basket({ setModal }: any) {

    const [foodList, setFoodList] = useState<string[] | null>(null)

    return (
        <Modal setModal={setModal}>
            <div onClick={(e)=>{e.stopPropagation()}} className='basket'>
                <div className='basket_header'>
                    <h1>Ваш заказ</h1>
                    <button onClick={()=> {setModal(null)}}>&#215;</button>
                </div>
                <div className='basket_block'>
                {
                    (foodList === null) ? (
                        <div className='basket_empty'>
                            <img src={empty} alt="" width='140px'/>
                            <h2>В ваше корзине пока пусто</h2>
                        </div>
                    ) : (
                        <div>
                            <p>any list</p>
                        </div>
                    )
                }
                </div>
            </div>
        </Modal>
    )
}