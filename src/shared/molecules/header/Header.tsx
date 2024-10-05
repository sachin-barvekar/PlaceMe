import React from 'react'
import { Link } from 'react-router-dom'
import { Header as HeaderSuite, Nav } from 'rsuite'

import { LOGO } from '../../../assets/images'
import './header.scss'

const Header: React.FC = () => {
  return (
    <HeaderSuite className="header">
      <img src={LOGO} className="header__logo" alt="placeMe" />
      <Nav className="header__user">
        <Nav.Menu title="Sachin">
          <Nav.Item as={Link} to="/logout">
            <span>Logout</span>
          </Nav.Item>
        </Nav.Menu>
      </Nav>
    </HeaderSuite>
  )
}

export default Header
