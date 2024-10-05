import React, { useState } from 'react'
import { Button } from 'rsuite'
import { Modal } from '../../shared'

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Modal
        secondary
        open={isOpen}
        onClose={handleClose}
        title="Dashboard"
        size="calc(65% - 120px)"
        body={<div>Your content here</div>}
      />
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    </div>
  )
}

export default Dashboard
