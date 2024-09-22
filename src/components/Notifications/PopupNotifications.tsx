import './notifications.css'

export default function PopupNotifications({ children }: {children: string}) {
    return (
        <div className="popup_notification">
            <h1>{children}</h1>
            <div className='line'></div>
        </div>
    )
}