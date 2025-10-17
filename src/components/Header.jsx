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
                    <div className="header_burger">
                        <input type="checkbox" id="burger-checkbox" class="burger-checkbox"/>
                        <label class="burger" for="burger-checkbox"></label>
                    </div>
                    <div className='menu-list'>
                        <ul >
                            <li className='menu-item'>Главная</li>
                            <li className='menu-item'>О нас</li>
                            <li className='menu-item'>Проекты</li>
                            <li className='menu-item'>Новости</li>
                            <li className='menu-item'>Партнеры</li>
                            <li className='menu-item'>Контакты</li>
                        </ul>
                        {/* <button className='home_btn'>Участвовать</button> */}
                        <ul >
                            <li className='menu-item'>Правила и Регламент</li>
                            <li className='menu-item'>FAQ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header