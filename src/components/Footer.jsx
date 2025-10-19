import { Link } from 'react-router-dom'
import '../styles/footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer_content'>
                    <h1>KG.SEF</h1>
                    <div className="footer_contacts">
                        <h1 className='footer_title'>Контактная информация:</h1>
                        <div className="footer_contactsOne">
                            <div className="footer_info">
                                <p>E-mail: </p><span>info.kgsef.org@gmail.com</span>
                            </div>
                            <div className="footer_info">
                                <p>Соцсети:</p>
                                <div>
                                    <a href="https://www.instagram.com/kyrgyzstansef?igsh=MTQyaTJiMG5nYXhoYQ==" target='_blank'>
                                        <img src="https://raw.githubusercontent.com/Scr00b1e/kg.sef/54677de17c7ba5bf5c44aa62df10bd0aa84c8d50/src/assets/instagram.svg" alt="" />
                                    </a>
                                    <img src="https://raw.githubusercontent.com/Scr00b1e/kg.sef/54677de17c7ba5bf5c44aa62df10bd0aa84c8d50/src/assets/uim_whatsapp.svg" alt="" />
                                </div>
                            </div>
                            <div className="footer_info">
                                <p>Телефон: </p><span>+996 778023040</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer_support">
                        <h1 className='footer_title'>Форма обратной связи</h1>
                        <div className="footer_link">
                            <p>Заполните форму ниже, чтобы  отправить нам сообщение напрямую</p>
                            <a href="https://forms.gle/abcd1234EfGh5678" target='_blank'>https://forms.gle/abcd1234EfGh5678</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer