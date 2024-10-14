import { useState } from 'react'
import imgMapPoint from '../../../assets/img/user_adress.jpg'
import iconMapPoint from '../../../assets/icons/icon_map-point.svg'
import './address.css'

export default function Address() {

    const [adress, setAdress] = useState<string[]>([])

    const [newAdress, setNewAdress] = useState(false)
    const [input, setInput] = useState('')

    const addAdress = () => {
        setAdress([input, ...adress])
        setInput('')
        setNewAdress(false)
    }

    const removeAdress = (id: number) => {
        const filter = adress.filter((item) => {
            if (item.length === id) { return false }
            return true
        })
        setAdress([...filter])
    }


    return (
        <>
            <button className='btn_adress_new' onClick={() => { setNewAdress(!newAdress)}}>Добавить адрес</button>
            {
                (
                    newAdress &&
                    <div className='adress_block'>
                        <div>
                            <img className='adress_img' src={iconMapPoint} />
                            <input
                                type="text"
                                onChange={(e) => { setInput(e.target.value) }}
                                value={input}
                            />
                        </div>
                        <button className='btn_adress' onClick={addAdress}>Добавить</button>
                    </div>
                )
            }
            {
                (adress.length === 0 && newAdress === false ) ? (
                    <div className='user_adress'>
                        <img src={imgMapPoint} />
                        <div>
                            <h1>у вас нет сохраненных адресов</h1>
                            <p>сделайте свой первый заказ и адрес сохранится автоматически</p>
                        </div>
                    </div>
                ) : (
                    adress.map((item, index) => {
                        return (
                            <div className='adress_block' key={index}>
                                <div>
                                    <img className='adress_img' src={iconMapPoint} />
                                    <h3>{item}</h3>
                                </div>
                                <button className='btn_adress' onClick={() => { removeAdress(index) }}>удалить</button>
                            </div>
                        )
                    })
                )
            }

        </>
    )
}