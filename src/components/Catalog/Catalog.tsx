import { useEffect, useState } from "react"
import './catalog.css'
import iconFaforite from '../../assets/icons/icon_favorite.svg'
import sushi from '../../data/sushi.json';
import drinks from '../../data/drinks.json';
import souce from '../../data/souce.json';
import sets from '../../data/sets.json';


export default function Catalog({ value }: { value: string }) {

    const [foodList, setFoodList] = useState<any>([...sushi])

    useEffect(() => {
        //     fetch('mongodb://localhost:27017/delivery/catalog')
        //     .then(value=>value.json())
        //     .then(response=>console.log(response))

        switch (value) {
            case "суши и роллы":
                setFoodList([...sushi])
                break;
            case "напитки":
                setFoodList([...drinks])
                break;
            case "соусы":
                setFoodList([...souce])
                break;
            case "сеты":
                setFoodList([...sets])
                break;
            }
    }, [])


    return (
        <section>
            <h1 className="catalog_name">{value}</h1>
            <div className="catalog">
                {
                    foodList.map((item: any) => {
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