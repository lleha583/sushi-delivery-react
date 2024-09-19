import { useEffect, useState } from "react"
import news from '../../data/news.json'
import './news.css'
import { INews } from "../../interface/interface"

export default function News() {

    const [newsList, setNewsList] = useState<INews[]>([])

    useEffect(()=> {
        setNewsList([...news])
    }, [])

    return (
        <section className="news">
            <h1>Новости</h1>
            <div className="post">

            {
                newsList.map((item: INews)=> {
                    return (
                        <div className="post__inner" key={item.id}>
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