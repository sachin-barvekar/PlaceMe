// authRoles.ts
type RoleType = 'admin' | 'student' | 'recruiter' | null

const ROLE_PERMISSIONS = {
  admin: {
    menuItems: [
      'Dashboard',
      'Notification',
      'Users',
      'Job Applications',
      'OnCampus Offers',
      'Feedback'
    ]
  },
  student: {
    menuItems: ['Dashboard', 'Notification', 'Feedback']
  },
  recruiter: {
    menuItems: ['Dashboard', 'Job Applications', 'OnCampus Offers']
  }
}

const getRolePermissions = (role: RoleType) => {
  return ROLE_PERMISSIONS[role || 'admin']
}

export default getRolePermissions
