import { useEffect, useState } from 'react'
import './newspage.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function NewsPage() {

    const location = useLocation()

    const [data, setData] = useState({})
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/commands/news?news_id=${location.state}`)
            .then(res=>setData({...res.data.detail}))
    }, [])

    return (
        <section className='news_page'>
            <div className='news_page_img'>
                <img src={`http://127.0.0.1:8000/commands/news/upload_image?news_id=${data.image_url}`} alt="news image" />
            </div>
            <div className='news_page_content'>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
        </section>
    )
};
