import '../styles/header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header_inner'>
                    <h1>KG.SEF</h1>
                    <ul className='header_content'>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>Проекты</li>
                        <li>Новости</li>
                        <li>Партнеры</li>
                        <li>Контакты</li>
                    </ul>
                    <button className='home_btn'>Участвовать</button>
                    <ul className='header_content'>
                        <li>Правила и Регламент</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header