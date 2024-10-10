import { Link } from 'react-router-dom';
import './catalog.css';
import iconFavorite from '../../assets/icons/icon_favorite.svg';
import { IProduct } from '../../interface/interface';
import { addFavorite } from '../../services/addFavorite';

interface IProps {
    item: IProduct,
    setNewProduct: (item: IProduct) => void
}

export const CatalogBlock = ({ item, setNewProduct }: IProps) => {

    return (
        <>
            <Link to={`/catalog/${item.type}/${item.id}`}>
                <div className="block_image">
                    <img src={`http://127.0.0.1:8000/commands/product/upload_image?${item.image_url}`} width='100%' />
                </div>
                <div className="block_info">
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            </Link>
            <div className="block_btn">
                <h1>{item.price}p.</h1>
                <div>
                    <img
                        className="block_btn_favorite" src={iconFavorite}
                        onClick={() => { addFavorite(item)}}
                    />
                    <button
                        className='block_btn_add'
                        onClick={() => { setNewProduct(item) }}
                    >В козину</button>
                </div>
            </div>
        </>
    )
};
