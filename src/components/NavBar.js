import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export const NavBar = () => {
    return (
        <Navbar color='primary'>
            <NavbarBrand className='text-white mx-auto'>
            <h1>Welcome to Courses Application</h1>
            </NavbarBrand>
        </Navbar>
    )
}
