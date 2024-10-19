import { FC, useCallback, useState } from 'react'
// import { SortType } from 'rsuite-table'
import { Table, Toolbar } from '../../../shared'
import '../../../scss/common/list/List.scss'
import UserPayment from './addStudent/AddStudent'

const { Column, HeaderCell, Cell } = Table


const COLUMNS = [
  { key: 'fullName', label: 'Full Name' },
  { key: 'email', label: 'Email' },
  { key: 'course', label: 'Course' },
  { key: 'mobile', label: 'Mobile Number' }
]

const mockStudentData = [
  {
    fullName: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    course: 'Computer Science',
    mobile: '+91 9876543210'
  },
  {
    fullName: 'Anita Sharma',
    email: 'anita.sharma@example.com',
    course: 'Information Technology',
    mobile: '+91 9123456789'
  },
  {
    fullName: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    course: 'Mechanical Engineering',
    mobile: '+91 9988776655'
  },
  {
    fullName: 'Neha Patel',
    email: 'neha.patel@example.com',
    course: 'Civil Engineering',
    mobile: '+91 9090909090'
  },
  {
    fullName: 'Amitabh Desai',
    email: 'amitabh.desai@example.com',
    course: 'Electrical Engineering',
    mobile: '+91 9876541234'
  },
  {
    fullName: 'Sachin Barvekar',
    email: 'sachin.barvekar@example.com',
    course: 'Computer',
    mobile: '+91 9123456780'
  },
  {
    fullName: 'Priya Mehta',
    email: 'priya.mehta@example.com',
    course: 'Biomedical Engineering',
    mobile: '+91 9876545678'
  },
  {
    fullName: 'Rahul Gupta',
    email: 'rahul.gupta@example.com',
    course: 'Chemical Engineering',
    mobile: '+91 9812345678'
  },
  {
    fullName: 'Sanjay Kapoor',
    email: 'sanjay.kapoor@example.com',
    course: 'Aerospace Engineering',
    mobile: '+91 9876543211'
  },
  {
    fullName: 'Sakshi Deshmukh',
    email: 'sakshi.deshmukh@example.com',
    course: 'Computer Science',
    mobile: '+91 9123456781'
  }
]

const StudentList: FC = () => {
  // Using state for mock data
  const [data] = useState(mockStudentData)
  const [isFetching] = useState(false)
  const [isModalOpen, setIsModalOpen]=useState<boolean>(false)

  const handleSortColumn = useCallback(() => {
    // Implement sorting logic here if needed
  }, [])

  const handleRowClick = () => {
    // Handle row click action if needed
  }

  const options = [
    {
      label: 'All Students',
      value: 'all',
      onClick: () => {}
    },
    {
      label: 'Verified Students',
      value: '',
      onClick: () => {}
    }
  ]

  return (
    <div className="user-list">
      <Toolbar
        options={options}
        onSearchChange={() => {}}
        total={data.length ?? 0}
        buttonName='Add Student'
        onButtonClick={() => setIsModalOpen(true)}
      />
      <div className="user-list__main-container">
        <Table
          data={data ?? []}
          loading={isFetching}
          onSortColumn={handleSortColumn}
          paginated
          pageSizeOptions={[10, 20, 30]}
          onRowClick={handleRowClick}
          total={data.length}
          defaultPageSize={10}
          onPageChange={() => {}}
        >
          {COLUMNS.map((column, index) => {
            const { key, label } = column

            return (
              <Column
                flexGrow={1}
                key={key}
                align={index === 0 ? 'left' : 'center'}
                sortable
              >
                <HeaderCell>{label}</HeaderCell>

                <Cell dataKey={key} />
              </Column>
            )
          })}
        </Table>
      </div>
      <UserPayment isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
    </div>
  )
}

export default StudentList
