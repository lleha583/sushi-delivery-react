import { useState } from 'react'
import './categories.css'

export default function Categories() {

    const [active, setActive] = useState<number | null>(null)

    const changeActive = (num: number): void => {
        if(num === active) {
            setActive(null)
        } else {
            setActive(num)
        }

    }

    return (
        <section>
            <ul className="categories">
                <li onClick={()=> {changeActive(1)}} className={active === 1 ? 'active' : ''}>Суши и роллы</li>
                <li onClick={()=> {changeActive(2)}} className={active === 2 ? 'active' : ''}>Напитки</li>
                <li onClick={()=> {changeActive(3)}} className={active === 3 ? 'active' : ''}>Соусы</li>
                <li onClick={()=> {changeActive(3)}} className={active === 4 ? 'active' : ''}>Сеты</li>
            </ul>
        </section>
    )
}