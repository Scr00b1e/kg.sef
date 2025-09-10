import Link from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
        <div className='container'>
          <div className='header__inner'>
            <Link to={'/'} className='#'>
              <h1>KG.SEF img</h1>
            </Link>
            <ul className='header__list'>
              <Link to={'/'} className='header__list-item'>
                Main
              </Link>
              <Link to={'/'} className='header__list-item'>
                About Us
              </Link>
              <Link to={'/'} className='header__list-item'>
                Projects
              </Link>
              <Link to={'/'} className='header__list-item'>
                News
              </Link>
              <Link to={'/'} className='header__list-item'>
                Partners
              </Link>
              <Link to={'/'} className='header__list-item'>
                Contacts
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Header