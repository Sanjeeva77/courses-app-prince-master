import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export const NavBar = () => {
    return (
        <Navbar color='warning'>
            <NavbarBrand className='text-dark mx-auto'>
            <h1>Welcome to Courses Application</h1>
            </NavbarBrand>
        </Navbar>
    )
}
