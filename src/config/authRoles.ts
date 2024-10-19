// authRoles.ts
type RoleType = 'admin' | 'student' | 'recruiter' | null
// import { FaEnvelopeOpenText } from "react-icons/fa";

const ROLE_PERMISSIONS = {
  admin: {
    menuItems: [
      'Dashboard',
      'Students',
      'Recruiters',
      'Job Openings',
      'Selected Students',
      'Notifications',
      'Feedback',
      'Signout'
    ]
  },
  student: {
    menuItems: [
      'Dashboard',
      'Job Openings',
      'Placement Pro',
      'Applied Jobs',
      'Notification',
      'Feedback',
      'Signout'
    ]
  },
  recruiter: {
    menuItems: [
      'Dashboard',
      'Jobs',
      'Job Applications',
      'FaEnvelopeOpenText',
      'Notification',
      'Feedback',
      'Signout'
    ]
  }
}

const getRolePermissions = (role: RoleType) => {
  return ROLE_PERMISSIONS[role || 'admin']
}

export default getRolePermissions
