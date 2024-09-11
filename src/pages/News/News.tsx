import { useEffect, useState } from "react"
import news from '../../data/news.json'
import './news.css'

export default function News() {

    const [newsList, setNewsList] = useState<any>([])

    useEffect(()=> {
        setNewsList([...news])
    }, [])

    return (
        <section className="news">
            <h1>Новости</h1>
            <div className="post">

            {
                newsList.map((item: any)=> {
                    return (
                        <div className="post__inner">
                            <img src={item.img} />
                            <div className="post__inner_content">
                                <h3>{item.title}</h3>
                                <span>подробнее</span>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}