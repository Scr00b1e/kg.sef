import { Link } from 'react-router-dom'
import '../styles/header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header-content'>
                    <h1>KG.SEF img</h1>
                    <ul className='header-content'>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>Проекты</li>
                        <li>Новости</li>
                        <li>Партнеры</li>
                        <li>Контакты</li>
                    </ul>
                    <ul className='header-content'>
                        <li>Правила и Регламент</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header