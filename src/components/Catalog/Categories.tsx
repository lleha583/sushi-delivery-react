import { useEffect, useState } from 'react'
import './categories.css'
import { Link } from 'react-router-dom'

export default function Categories({category}: {category?: number}) {

    const [active, setActive] = useState<number | null>(null)

    useEffect(()=>{
        if(category === undefined) return 
        setActive(category)
    }, [])

    const changeActive = (num: number): void => {
        if(num === active) {
            setActive(null)
        } else {
            setActive(num)
        }
    }

    return (
        <section>
            <div className="categories">
                <Link to={'/catalog/sushi'} onClick={()=> {changeActive(1)}} className={active === 1 ? 'active' : ''}>Суши и роллы</Link>
                <Link to={'/catalog/drink'} onClick={()=> {changeActive(2)}} className={active === 2 ? 'active' : ''}>Напитки</Link>
                <Link to={'/catalog/sauce'} onClick={()=> {changeActive(3)}} className={active === 3 ? 'active' : ''}>Соусы</Link>
                <Link to={'/catalog/set'} onClick={()=> {changeActive(4)}} className={active === 4 ? 'active' : ''}>Сеты</Link>
            </div>
        </section>
    )
}