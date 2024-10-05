import React from 'react'
import { Sidebar } from 'rsuite'
import Sidenav from 'rsuite/Sidenav'
import Nav from 'rsuite/Nav'
import { ReactComponent as HelpCircleIcon } from '../../../assets/images/sidenav/help-circle.svg'
import { ReactComponent as SettingsIcon } from '../../../assets/images/sidenav/settings.svg'
import { Divider } from '../../atoms'
import NavItem from './NavItem'
import './sideNav.scss'
import MenuItems from '../../../config/MenuItems'

const SideNav: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState('1')
  const [expanded, setExpanded] = React.useState(false)
  const clickToggler = () => {
    setExpanded(!expanded)
  }

  return (
    <Sidebar
      className={`${expanded ? '' : 'collapsing'}`}
      data-testid="sidebar"
    >
      <div className="sideNav">
        <Sidenav appearance="subtle" expanded={expanded}>
          <div content="placeMe" className="rs-sidenav-toggle">
            <button
              aria-label="Collapse"
              type="button"
              className="rs-sidenav-toggle-button rs-btn-icon rs-btn-icon-placement-left rs-btn rs-btn-default"
              onClick={clickToggler}
            >
              {expanded ? (
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 12 32"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                  className="rs-icon"
                  aria-label="angle left"
                  data-category="legacy"
                >
                  <path d="M11.196 9.714a.612.612 0 01-.179.411l-7.018 7.018 7.018 7.018c.107.107.179.268.179.411s-.071.304-.179.411l-.893.893c-.107.107-.268.179-.411.179s-.304-.071-.411-.179L.981 17.555c-.107-.107-.179-.268-.179-.411s.071-.304.179-.411l8.321-8.321c.107-.107.268-.179.411-.179s.304.071.411.179l.893.893c.107.107.179.25.179.411z" />
                </svg>
              ) : (
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 12 32"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                  className="rs-icon"
                  aria-label="angle right"
                  data-category="legacy"
                >
                  <path d="M.804 22.286a.612.612 0 01.179-.411l7.018-7.018-7.018-7.018c-.107-.107-.179-.268-.179-.411s.071-.304.179-.411l.893-.893c.107-.107.268-.179.411-.179s.304.071.411.179l8.321 8.321c.107.107.179.268.179.411s-.071.304-.179.411l-8.321 8.321c-.107.107-.268.179-.411.179s-.304-.071-.411-.179l-.893-.893c-.107-.107-.179-.25-.179-.411z" />
                </svg>
              )}
            </button>
          </div>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              {MenuItems.map(({ id, name, link, icon }) => (
                <NavItem key={id} id={id} name={name} link={link} icon={icon} />
              ))}
              <Divider />
              <NavItem
                name="Help"
                icon={HelpCircleIcon}
                id={`${MenuItems.length + 1}`}
              />
              <NavItem
                name="Settings"
                icon={SettingsIcon}
                id={`${MenuItems.length + 2}`}
              />
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </Sidebar>
  )
}

export default SideNav
