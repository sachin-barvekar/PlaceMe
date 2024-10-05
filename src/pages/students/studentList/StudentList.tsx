import { FC, useCallback, useState } from 'react'
// import { SortType } from 'rsuite-table'
import { Table, Toolbar } from '../../../shared'
import './StudentList.scss'

const { Column, HeaderCell, Cell } = Table

const COLUMNS = [
  { key: 'student.fullName', label: 'Full Name' },
  { key: 'student.email', label: 'Email' },
  { key: 'student.course', label: 'Course' },
  { key: 'student.mobile', label: 'Mobile Number' }
]

const mockStudentData = [
  {
    student: {
      fullName: 'Rajesh Kumar',
      email: 'rajesh.kumar@example.com',
      course: 'Computer Science',
      mobile: '+91 9876543210'
    }
  },
  {
    student: {
      fullName: 'Anita Sharma',
      email: 'anita.sharma@example.com',
      course: 'Information Technology',
      mobile: '+91 9123456789'
    }
  },
  {
    student: {
      fullName: 'Vikram Singh',
      email: 'vikram.singh@example.com',
      course: 'Mechanical Engineering',
      mobile: '+91 9988776655'
    }
  },
  {
    student: {
      fullName: 'Neha Patel',
      email: 'neha.patel@example.com',
      course: 'Civil Engineering',
      mobile: '+91 9090909090'
    }
  },
  {
    student: {
      fullName: 'Amitabh Desai',
      email: 'amitabh.desai@example.com',
      course: 'Electrical Engineering',
      mobile: '+91 9876541234'
    }
  },
  {
    student: {
      fullName: 'Sachin Barvekar',
      email: 'sachin.barvekar@example.com',
      course: 'Computer',
      mobile: '+91 9123456780'
    }
  },
  {
    student: {
      fullName: 'Priya Mehta',
      email: 'priya.mehta@example.com',
      course: 'Biomedical Engineering',
      mobile: '+91 9876545678'
    }
  },
  {
    student: {
      fullName: 'Rahul Gupta',
      email: 'rahul.gupta@example.com',
      course: 'Chemical Engineering',
      mobile: '+91 9812345678'
    }
  },
  {
    student: {
      fullName: 'Sanjay Kapoor',
      email: 'sanjay.kapoor@example.com',
      course: 'Aerospace Engineering',
      mobile: '+91 9876543211'
    }
  },
  {
    student: {
      fullName: 'Sakshi Deshmukh',
      email: 'sakshi.deshmukh@example.com',
      course: 'Computer Science',
      mobile: '+91 9123456781'
    }
  }
]

const StudentList: FC = () => {
  // Using state for mock data
  const [data] = useState(mockStudentData)
  const [isFetching] = useState(false)

  const handleSortColumn = useCallback(() => {
    // Implement sorting logic here if needed
  }, [])

  const handleRowClick = () => {
    // Handle row click action if needed
  }

  const options = [
    {
      label: 'Student List',
      value: 'all',
      onClick: () => {}
    }
  ]

  return (
    <div className="user-list">
      <Toolbar
        options={options}
        onSearchChange={() => {}}
        total={data.length ?? 0}
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
          onPageChange={() => {}} // If pagination is needed, implement here
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
    </div>
  )
}

export default StudentList
