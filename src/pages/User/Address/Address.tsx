import { useEffect, useState } from 'react'
import imgMapPoint from '../../../assets/img/user_adress.jpg'
import iconMapPoint from '../../../assets/icons/icon_map-point.svg'
import './address.css'
import { useLocation } from 'react-router-dom'
import { changeAddress } from '../../../services/user/changeAddress'

export default function Address() {

    const location = useLocation()

    const [address, setAddress] = useState<string[]>([])
    const [newAddress, setNewAddress] = useState(false)
    const [input, setInput] = useState('')

    useEffect(() => {
        if(location.state !== '[null]' && location.state !== null) setAddress([location.state])
    }, [])

    const addAdress = () => {
        setAddress([input, ...address])
        changeAddress(input)
        setInput('')
        setNewAddress(false)
    }

    const removeAddress = (id: number) => {
        changeAddress('[null]')
        const filter = address.filter((item) => {
            if (item.length === id) { return false }
            return true
        })
        setAddress([...filter])
    }

    return (
        <>
            <button className='btn_adress_new' 
                onClick={() => { setNewAddress(!newAddress)}}
            >Добавить адрес</button>
            {
                (
                    newAddress &&
                    <div className='adress_block'>
                        <div>
                            <img 
                                className='adress_img' 
                                src={iconMapPoint} 
                            />
                            <input
                                type="text"
                                onChange={(e) => { setInput(e.target.value) }}
                                value={input}
                            />
                        </div>
                        <button 
                            className='btn_adress' 
                            onClick={addAdress}
                        >Добавить</button>
                    </div>
                )
            }
            {
                (address.length === 0 && newAddress === false ) ? (
                    <div className='user_adress'>
                        <img src={imgMapPoint} />
                        <div>
                            <h1>у вас нет сохраненных адресов</h1>
                            <p>сделайте свой первый заказ и адрес сохранится автоматически</p>
                        </div>
                    </div>
                ) : (
                    address.map((item, index) => {
                        return (
                            <div className='adress_block' key={index}>
                                <div>
                                    <img className='adress_img' src={iconMapPoint} />
                                    <h3>{item}</h3>
                                </div>
                                <button className='btn_adress' onClick={() => { removeAddress(index) }}>удалить</button>
                            </div>
                        )
                    })
                )
            }

        </>
    )
}