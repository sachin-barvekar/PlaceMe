import { HTMLAttributes } from 'react'
import NoticeIcon from '@rsuite/icons/Notice'
import UserInfoIcon from '@rsuite/icons/UserInfo'
import { AiOutlineHome } from 'react-icons/ai'
import { MdFeedback } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import CreativeIcon from '@rsuite/icons/Creative'

type menuItemType = {
  id: string,
  name: string,
  link?: string,
  icon: React.FC<HTMLAttributes<SVGElement>>
}

const menuItems: menuItemType[] = [
  {
    id: '1',
    name: 'Dashboard',
    link: '/',
    icon: AiOutlineHome
  },
  {
    id: '2',
    name: 'Notification',
    link: '/notification',
    icon: NoticeIcon
  },
  {
    id: '3',
    name: 'Users',
    link: '/users',
    icon: UserInfoIcon
  },
  {
    id: '4',
    name: 'Job Applications',
    link: '',
    icon: CreativeIcon
  },
  {
    id: '5',
    name: 'OnCampus Offers',
    link: '',
    icon: FaRegHandshake
  },

  {
    id: '6',
    name: 'Feedback',
    link: '',
    icon: MdFeedback
  }
]

export default menuItems
