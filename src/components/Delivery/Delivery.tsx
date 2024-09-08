import imgMap from '../../assets/img/img_map.png'
import './delivery.css'

export default function Delivery() {
    return (
        <div className='delivery'>
            <h1>Каждая кухня работает со своей зоной доставки, чтобы привезти еду максимально быстро</h1>
            <img src={imgMap} />
        </div>
    )
}