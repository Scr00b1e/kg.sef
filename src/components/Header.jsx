import React from 'react';
import '../styles/header.scss'

const Header = () => {
    const [opened, setOpened] = React.useState(false);
    const onClickOpen = () => {
        setOpened(!opened);
    }

    return (
        <div className='header'>
            <div className='container'>
                <div className='header_inner'>
                    <h1>KG.SEF</h1>
                    <ul className='header_content'>
                        <li id='nav_1'>Главная</li>
                        <li id='nav_2'>О нас</li>
                        <li id='nav_3'>Проекты</li>
                        <li id='nav_4'>Новости</li>
                        {/* <li>Партнеры</li> */}
                        <li id='nav_5'>Контакты</li>
                    </ul>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKXhQ_fuOtDiWIXy6YphGiCeumCHQjgi2LkJytsmCzkTI-bw/viewform?usp=header"
                    target='_blank' className='home_link'><button className='home_btn'>Участвовать</button></a>
                    <ul className='header_content'>
                        <li>Правила и Регламент</li>
                        <li id='nav_6'>FAQ</li>
                    </ul>
                    <div className="header_burger" onClick={onClickOpen}>
                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" onChange={(e) => setOpened(e.target.checked)}/>
                        <label className="burger" htmlFor="burger-checkbox"></label>
                    </div>
                    <div className={`menu-list ${opened ? 'opacityShow' : ''}`}>
                        <ul >
                            <li className='menu-item'>Главная</li>
                            <li className='menu-item'>О нас</li>
                            <li className='menu-item'>Проекты</li>
                            <li className='menu-item'>Новости</li>
                            {/* <li className='menu-item'>Партнеры</li> */}
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