import React from 'react'
import { Cell } from 'rsuite-table'
import EditIcon from '@rsuite/icons/Edit'
import TrashIcon from '@rsuite/icons/Trash'
import VisibleIcon from '@rsuite/icons/Visible'
import ShareOutlineIcon from '@rsuite/icons/ShareOutline'
import {
  MdNotificationsActive,
  MdLocalFlorist,
  MdFileDownload
} from 'react-icons/md'

type Props = {
  rowData?: any,
  dataKey: string,
  onAction?: (eventKey: string | undefined, rowData: any) => void,
  actionOptions?: string[]
}

const defaultProps = {
  rowData: undefined,
  actionOptions: [],
  onAction: () => {}
}

const defaultOptions = [
  { label: 'View', eventKey: '1', icon: <VisibleIcon /> },
  { label: 'Edit', eventKey: '2', icon: <EditIcon /> },
  { label: 'Delete', eventKey: '3', icon: <TrashIcon /> },
  { label: 'Share', eventKey: '4', icon: <ShareOutlineIcon /> },
  { label: 'Notifications', eventKey: '5', icon: <MdNotificationsActive /> },
  { label: 'View Farm', eventKey: '6', icon: <MdLocalFlorist /> },
  { label: 'Download', eventKey: '7', icon: <MdFileDownload /> }
]

const ActionCell: React.FC<Props> = ({
  rowData,
  dataKey,
  actionOptions = [],
  ...props
}) => {
  const optionsToDisplay = actionOptions.length
    ? defaultOptions.filter((option) => actionOptions.includes(option.label))
    : defaultOptions

  const handleActionClick = (eventKey: string | undefined) => {
    if (eventKey && typeof props.onAction === 'function') {
      props.onAction(eventKey, rowData)
    }
  }

  return (
    <Cell {...props} className="link-group">
      <div
        style={{
          display: 'flex',
          gap: '15px'
        }}
      >
        {optionsToDisplay?.map((option) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            key={option.eventKey}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}
            onClick={() => handleActionClick(option.eventKey)}
          >
            {option.icon && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {option.icon}
              </div>
            )}
          </div>
        ))}
      </div>
    </Cell>
  )
}

ActionCell.defaultProps = defaultProps

export default ActionCell
