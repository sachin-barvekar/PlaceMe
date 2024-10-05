/* eslint-disable react/jsx-props-no-spreading */
import { FC, RefAttributes } from 'react'
import { RowDataType, RowKeyType, Cell as RsuiteCell } from 'rsuite-table'
import { InnerCellProps } from 'rsuite-table/lib/Cell'

type Props = InnerCellProps<RowDataType<any>, RowKeyType> &
  RefAttributes<HTMLDivElement>

const Cell: FC<Props> = ({ dataKey, ...props }: Props) => {
  return <RsuiteCell dataKey={dataKey} {...props} />
}

export default Cell
