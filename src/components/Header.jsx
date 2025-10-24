import React from 'react';
import '../styles/header.scss'

const Header = ({onNavClick}) => {
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
                        <li onClick={() => onNavClick('home')}>Главная</li>
                        <li onClick={() => onNavClick('about')}>О нас</li>
                        <li onClick={() => onNavClick('projects')}>Проекты</li>
                        <li onClick={() => onNavClick('news')}>Новости</li>
                        {/* <li>Партнеры</li> */}
                        <li onClick={() => onNavClick('contacts')}>Контакты</li>
                    </ul>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKXhQ_fuOtDiWIXy6YphGiCeumCHQjgi2LkJytsmCzkTI-bw/viewform?usp=header"
                    target='_blank' className='home_link'><button className='home_btn'>Участвовать</button></a>
                    <ul className='header_content'>
                        <li>Правила и Регламент</li>
                        <li onClick={() => onNavClick('faq')} >FAQ</li>
                    </ul>
                    <div className="header_burger" onClick={onClickOpen}>
                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" onChange={(e) => setOpened(e.target.checked)}/>
                        <label className="burger" htmlFor="burger-checkbox"></label>
                    </div>
                    <div className={`menu-list ${opened ? 'opacityShow' : ''}`}>
                        <ul >
                            <li onClick={() => onNavClick('home')} className='menu-item'>Главная</li>
                            <li onClick={() => onNavClick('about')} className='menu-item'>О нас</li>
                            <li onClick={() => onNavClick('projects')} className='menu-item'>Проекты</li>
                            <li onClick={() => onNavClick('news')} className='menu-item'>Новости</li>
                            {/* <li className='menu-item'>Партнеры</li> */}
                            <li onClick={() => onNavClick('contacts')} className='menu-item'>Контакты</li>
                        </ul>
                        {/* <button className='home_btn'>Участвовать</button> */}
                        <ul >
                            <li className='menu-item'>Правила и Регламент</li>
                            <li onClick={() => onNavClick('faq')} className='menu-item'>FAQ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header