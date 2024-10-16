import './categoryPage.css'
import imgSushi from '../../assets/img/catalog_sushi.jpg'
import imgCouse from '../../assets/img/catalog_couse.jpg'
import imgDrinks from '../../assets/img/catalog_drinks.jpg'
import imgSets from '../../assets/img/catalog_sets.jpg'
import { Link } from 'react-router-dom'

export default function CategoryPage() {

    return (
        <section className='category'>
            <h1 className='page_name'>Каталог ресторана</h1>
            <div className='category_path'>
                <Link to={'sushi'} state={1}>
                    <div className='category_path_block'>
                        <img src={imgSushi} />
                        <h2>sushi</h2>
                    </div>
                </Link>
                <Link to={'sauce'} state={3}>
                    <div className='category_path_block'>
                        <img src={imgCouse} />
                        <h2>souce</h2>
                    </div>
                </Link>
                <Link to={'drink'} state={2}>
                    <div className='category_path_block'>
                        <img src={imgDrinks} />
                        <h2>drinks</h2>
                    </div>
                </Link>
                <Link to={'set'} state={4}>
                    <div className='category_path_block'>
                        <img src={imgSets} />
                        <h2>sets</h2>
                    </div>
                </Link>
            </div>
        </section>
    )
}