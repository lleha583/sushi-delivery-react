import { useEffect, useState } from 'react'
import './notifications.css'

export default function PopupNotifications({ value }: {value: string}) {

    const [text, setText] = useState<null | string>(null)

    useEffect(()=> {

        if(value === "basket") {
            setText('Добавлено в корзину')  
        } else {
             setText('Добавлено в избранное')
        }
    }, [])


    return (
        <div className="popup_notification">
                {text}
            <div className='line'></div>
        </div>
    )
}