import { useEffect, useState } from "react"
import './news.css'
import { INews } from "../../interface/interface"
import axios from "axios"
import { Link } from "react-router-dom"

export default function News() {

    const [newsList, setNewsList] = useState<INews[]>([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/commands/news/1')
        .then((res)=>{setNewsList([...res.data.detail])})
        .catch(e=>console.log(e))
    }, [])

    return (
        <section className="news">
            <h1>Новости</h1>
            <div className="post">
            {
                newsList.map((item: INews)=> {
                    return (
                        <Link to={`${item.id}`} state={item.id}>
                        <div className="post__inner" key={item.id}>
                            <img src={`http://127.0.0.1:8000/commands/news/upload_image?news_id=${item.image_url}`} />
                            <div className="post__inner_content">
                                <h3>{item.title}</h3>
                                <span>подробнее</span>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
            </div>
        </section>
    )
}