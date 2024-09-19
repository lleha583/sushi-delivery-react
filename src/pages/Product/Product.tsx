//import { useParams } from "react-router-dom";
import './product.css';
import sushi from '../../data/sushi.json';
import iconFaforite from '../../assets/icons/icon_favorite.svg'


export default function Product() {


    //const params = useParams()

    return (
        <>
            <section className="product">
                <div className="product_img">
                    <img src={sushi[1].imageUrl} />
                </div>
                <div className="product_info">
                    <h1 className="product_info_title">{sushi[1].title}</h1>
                    <p className="product_info_body">состав:</p>
                    <p className="product_info_body">{sushi[1].body}</p>
                    <p className="product_info_weight">вес:</p>
                    <p className="product_info_weight">{sushi[1].weight}г.</p>
                    <div className="product_info_btn">
                        <p className='product_info_price'>{sushi[1].price}р.</p>
                        <div>
                            <img className="block_btn_favorite" src={iconFaforite} />
                            <button className='block_btn_add'>В козину</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}