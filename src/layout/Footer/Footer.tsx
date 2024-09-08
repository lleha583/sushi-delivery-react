import logo from '../../assets/img/ninjasush-logo.png';
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer_logo">
                <img src={logo} alt="" />
            </div>
            <nav className="footer_pages">
                <h3>Навигация:</h3>
                <a>Главная</a>
                <a>Меню</a>
                <a>Доставка</a>
                <a>Вакансии</a>
                <a>Новости</a>
            </nav>
            <div className="footer_contacts">
                <h3>Оформить заказ:</h3>
                <p>+38 (067) 436 61 27</p>
                <p>+38 (066) 031 76 30</p>
                <p>+38 (093) 924 98 28</p>
            </div>
            <div className="footer_timework">
                <h3>Время работы:</h3>
                <p>с 11:00 до 22:45</p>
                <p>с 22.45 до 06.00</p>

            </div>
            <div className="footer_social_network">
                <h3>Мы в соц. сетях:</h3>

            </div>
        </footer>
    )
}