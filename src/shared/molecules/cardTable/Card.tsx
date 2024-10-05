import React from 'react'
import { Button } from 'rsuite'
import './CardTable.scss'
import { CardActionCell } from '../table/cells'

interface CardProps {
  imageUrl: string;
  name: string;
  hindiName: string;
  marathiName: string;
  onAction?: (eventKey: string | undefined, rowData: any) => void;
  data?: any;
  actionOptions?: string[];
  handleSelection?: (rowData: any) => void;
  selected?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  name,
  hindiName,
  marathiName,
  onAction,
  data,
  actionOptions,
  handleSelection,
  selected = false
}) => {
  return (
    <div className={`card ${selected ? 'selected' : ''}`}>
      <div className="card-header">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="card-body">
        <h3>{name}</h3>
        <p>Hindi Name: {hindiName}</p>
        <p>Marathi Name: {marathiName}</p>
        {handleSelection && (
          <Button
            className="select-button"
            onClick={() => {
              handleSelection(data)
            }}
          >
            {selected ? 'Deselect' : 'Select'}
          </Button>
        )}
      </div>
      {actionOptions && (
        <div className="card-action">
          <CardActionCell
            rowData={data}
            dataKey="action"
            onAction={onAction}
            actionOptions={actionOptions}
          />
        </div>
      )}
    </div>
  )
}

export default Card
