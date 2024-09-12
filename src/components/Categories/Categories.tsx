import { useState } from 'react'
import './categories.css'
import { Link } from 'react-router-dom'

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
                <Link to={'/category/sushi'} onClick={()=> {changeActive(1)}} className={active === 1 ? 'active' : ''}>Суши и роллы</Link>
                <Link to={'/category/drinks'} onClick={()=> {changeActive(2)}} className={active === 2 ? 'active' : ''}>Напитки</Link>
                <Link to={'/category/souce'} onClick={()=> {changeActive(3)}} className={active === 3 ? 'active' : ''}>Соусы</Link>
                <Link to={'/category/sets'} onClick={()=> {changeActive(4)}} className={active === 4 ? 'active' : ''}>Сеты</Link>
            </ul>
        </section>
    )
}