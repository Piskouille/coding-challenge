import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link className='link' to='/'>
                Home
            </Link>

            <Link className='link' to='/temperature'>
                Temperature
            </Link>

            
            <Link className='link' to='/customize-image'>
                Customize Image
            </Link>
        </nav>
    )
}

export default Nav
