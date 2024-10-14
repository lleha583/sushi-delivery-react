import { useEffect, useState } from 'react'
import './modal.css'

export default function PopupNotifications() {

    const [text, setText] = useState<null | string>(null)

    useEffect(()=> {
            setText('Добавлено в корзину')  
    }, [])

    return (
        <div className="popup_notification">
                {text}
            <div className='line'></div>
        </div>
    )
}