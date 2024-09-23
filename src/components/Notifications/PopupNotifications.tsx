import './notifications.css'

export default function PopupNotifications({ status }: {status: string}) {
    return (
        <div className="popup_notification">
            {
                (status === "basket" && <h1>Добаслено в корзину</h1> )
            }
            {
                (status === "favorite" && <h1>Добаслено в избранное</h1> )
            }
            <div className='line'></div>
        </div>
    )
}