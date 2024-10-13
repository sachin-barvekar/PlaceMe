import React from 'react'
import { Sidebar } from 'rsuite'
import Sidenav from 'rsuite/Sidenav'
import Nav from 'rsuite/Nav'
import { ReactComponent as HelpCircleIcon } from '../../../assets/images/sidenav/help-circle.svg'
import { ReactComponent as SettingsIcon } from '../../../assets/images/sidenav/settings.svg'
import { Divider } from '../../atoms'
import NavItem from './NavItem'
import './sideNav.scss'
import allMenuItems from '../../../config/MenuItems'
import getRolePermissions from '../../../config/authRoles' // Adjust the import path as needed
import useAuth from '../../../hooks/Auth'

const SideNav: React.FC = () => {
  const { role } = useAuth() // Get the role from your auth context
  const [activeKey, setActiveKey] = React.useState('1')
  const [expanded, setExpanded] = React.useState(false)
  const clickToggler = () => {
    setExpanded(!expanded)
  }

  // Filter menu items based on role
  const permissions = getRolePermissions(role) // Get permissions based on role
  const filteredMenuItems = allMenuItems.filter((item) =>
    permissions.menuItems.includes(item.name)
  )

  return (
    <Sidebar
      className={`${expanded ? '' : 'collapsing'}`}
      data-testid="sidebar"
    >
      <div className="sideNav">
        <Sidenav appearance="subtle" expanded={expanded}>
          <div className="rs-sidenav-toggle">
            <button
              aria-label="Collapse"
              type="button"
              className="rs-sidenav-toggle-button rs-btn-icon rs-btn-icon-placement-left rs-btn rs-btn-default"
              onClick={clickToggler}
            >
              {expanded ? (
                <svg /* Collapsed icon */>
                  <path d="..." />
                </svg>
              ) : (
                <svg /* Expanded icon */>
                  <path d="..." />
                </svg>
              )}
            </button>
          </div>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              {filteredMenuItems.map((item, index) => (
                <NavItem
                  key={index}
                  id={index.toString()}
                  name={item.name}
                  link={item.link}
                  icon={item.icon} // Pass the icon here
                />
              ))}
              <Divider />
              <NavItem
                name="Help"
                icon={HelpCircleIcon}
                id={`${filteredMenuItems.length + 1}`}
              />
              <NavItem
                name="Settings"
                icon={SettingsIcon}
                id={`${filteredMenuItems.length + 2}`}
              />
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </Sidebar>
  )
}

export default SideNav
