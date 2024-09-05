import { useState } from "react"
import './catalog.css'
import sushi from '../../data/sushi.json';
import iconFaforite from '../../assets/icons/icon_favorite.svg'

export default function Catalog({ }) {

    const name = "суши"

    const [foodList, setFoodList] = useState([...sushi])

    return (
        <section>
            <h1>{name}</h1>
            <div className="catalog">
                {
                    foodList.map((item) => {
                        return (
                            <div className="block">
                                <div className="block_image">
                                    <img src={item.imageUrl} width='100%' />
                                </div>
                                <div className="block_info">
                                    <h1>{item.title}</h1>
                                    <p>{item.body}</p>
                                </div>
                                <div className="block_btn">
                                    <h1>{item.price}p.</h1>
                                    <div>
                                        <img className="block_btn_favorite" src={iconFaforite} />

                                        <button className="block_btn_add">+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </section>
    )
}