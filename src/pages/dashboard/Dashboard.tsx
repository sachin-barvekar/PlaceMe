import { useCallback, useState } from 'react'
import { MdBusiness } from 'react-icons/md'
import { FaUserTie } from 'react-icons/fa'
import mockdata from './data.json'
import {
  PieChart,
  BarChart,
  Table,
  DashCards,
  PageHeading,
  Toolbar
} from '../../shared'
import './Dashboard.scss'
import '../../scss/common/list/List.scss'

const { Column, HeaderCell, Cell } = Table

const COLUMNS = [
  { key: 'companyName', label: 'Company Name' },
  { key: 'date', label: 'Date' },
  { key: 'location', label: 'Location' },
  { key: 'status', label: 'Drive Status' },
  { key: 'registeredStudent', label: 'Registered Students' }
]

const mockUpcomingDrives = [
  {
    companyName: 'Infosys',
    date: '2024-11-15',
    location: 'Mumbai',
    status: 'Open',
    registeredStudent: 150
  },
  {
    companyName: 'TCS',
    date: '2024-11-18',
    location: 'Bangalore',
    status: 'Scheduled',
    registeredStudent: 120
  },
  {
    companyName: 'Wipro',
    date: '2024-12-01',
    location: 'Chennai',
    status: 'Open',
    registeredStudent: 98
  },
  {
    companyName: 'Accenture',
    date: '2024-12-05',
    location: 'Hyderabad',
    status: 'Scheduled',
    registeredStudent: 200
  },
  {
    companyName: 'Capgemini',
    date: '2024-12-10',
    location: 'Pune',
    status: 'Open',
    registeredStudent: 175
  }
]

const Dashboard: React.FC = () => {
  const [data] = useState(mockUpcomingDrives)
  const [isFetching] = useState(false)

  const handleSortColumn = useCallback(() => {
    // Implement sorting logic here if needed
  }, [])

  const handleRowClick = () => {
    // Handle row click action if needed
  }

  const options = [
    {
      label: 'Upcoming Drives',
      value: 'all',
      onClick: () => {}
    },
    {
      label: 'Past Drives',
      value: '',
      onClick: () => {}
    }
  ]
  const sampleData = [
    ['Computer Engineering', 90],
    ['CSDS', 50],
    ['ENTC', 30],
    ['Mechanical', 45],
    ['Civil', 25]
  ]

  const USER_DATA = [
    {
      title: 'Total Students',
      description: 1000,
      icon: <FaUserTie className="dashboard-icon pending" />
    },
    {
      title: 'Total Recruiters',
      description: 60,
      icon: <MdBusiness className="dashboard-icon iconcompleted" />
    },
    {
      title: 'Placed Students',
      description: 455,
      icon: <FaUserTie className="dashboard-icon placed" />
    }
  ]

  return (
    <div className="dashboard">
      <PageHeading title="Welcome Admin" />
      <DashCards data={USER_DATA} onCardClick={() => {}} />
      <div className="report-dash">
        <div className="sub-dash">
          <PieChart
            data={sampleData ?? []}
            title="Department Wise Placement"
            legend={false}
            startAngle={210}
          />
        </div>
        <div className="sub-dash">
          <BarChart data={mockdata ?? []} title="Placement History" />
        </div>
      </div>
      <div className="user-list">
        <Toolbar
          options={options}
          // onSearchChange={() => {}}
          total={data.length ?? 0}
        />
        <div className="user-list__main-container">
          <Table
            data={data ?? []}
            loading={isFetching}
            onSortColumn={handleSortColumn}
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
      </div>
    </div>
  )
}

export default Dashboard
