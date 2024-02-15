import clsx from 'clsx'
import { ButtonBase } from '@material-ui/core'

import { useTable } from './utils'

const stopBubbling = e => e.stopPropagation()

const RecordValues = ({ record, onClick, className }) => {
  const { columns, classes } = useTable()

  const cells = columns.map((column, index) => (
    <div
      key={column.key ?? index}
      onMouseDown={column.interactive ? stopBubbling : undefined}
      className={clsx(classes.cell, classes.valueCell, column.classes?.value)}
      style={{ ...column.style, textAlign: column.align }}
    >
      {column.value(record)}
    </div>
  ))

  return onClick ? (
    <ButtonBase
      component="div"
      className={clsx(classes.cellContainer, className)}
      onClick={() => onClick(record)}
    >
      {cells}
    </ButtonBase>
  ) : (
    <div className={clsx(classes.cellContainer, className)}>{cells}</div>
  )
}

export default RecordValues
