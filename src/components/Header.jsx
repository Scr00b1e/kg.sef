import { Link } from 'react-router-dom'
import '../styles/header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div>
                    <h1>KG.SEF img</h1>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Projects</li>
                        <li>News</li>
                        <li>Partners</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header