import React from 'react'
import {Link} from 'react-router-dom'
import CartBtn from '../Button/CartBtn'

const Header = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid py-2'>
                    <button 
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        className='navbar-toggler'
                        type='button'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                            <span className='navba-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link className='nav-link' aria-current='page' to='/'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/products'>Product</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/about'>About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/contact'>Contact</Link>
                            </li>
                        </ul>
                        <CartBtn/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header