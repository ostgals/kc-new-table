import clsx from 'clsx'

import { useTable } from './utils'

const ColumnLabels = ({ className }) => {
  const { columns, classes } = useTable()

  return (
    <div className={clsx(classes.cellContainer, className)}>
      {columns.map(column => (
        <div
          key={column.key}
          className={clsx(
            classes.cell,
            classes.labelCell,
            column.classes?.label
          )}
          style={{ ...column.style, textAlign: column.align }}
        >
          {column.label}
        </div>
      ))}
    </div>
  )
}

export default ColumnLabels
