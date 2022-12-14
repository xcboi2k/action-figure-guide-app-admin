import React from 'react';
import {Menu, Container, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/welcomePageLogo.png';

const NavBar = () => {
    return (
        <Menu
        inverted borderless attached
        style={{
            padding: '0.3rem',
            marginBottom: '20px'
        }}>
            <Container>
                <Menu.Item name='Home'>
                    <Link to='/'>
                        <Image size='mini' src={Logo} alt='logo'/>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <h2>Action Figure Guide App Admin</h2>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar