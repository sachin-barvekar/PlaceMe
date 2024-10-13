import { AiOutlineHome } from 'react-icons/ai'
import { MdFeedback } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import NoticeIcon from '@rsuite/icons/Notice'
import UserInfoIcon from '@rsuite/icons/UserInfo'
import CreativeIcon from '@rsuite/icons/Creative'

// Define menu items with their icons
const allMenuItems = [
  {
    id: '1',
    name: 'Dashboard',
    link: '/dashboard',
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
    link: '/job-applications',
    icon: CreativeIcon
  },
  {
    id: '5',
    name: 'OnCampus Offers',
    link: '/oncampus-offers',
    icon: FaRegHandshake
  },
  {
    id: '6',
    name: 'Feedback',
    link: '/feedback',
    icon: MdFeedback
  }
]

export default allMenuItems
