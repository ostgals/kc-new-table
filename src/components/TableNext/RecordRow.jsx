import clsx from 'clsx'

import { useTable } from './utils'

const RecordRow = ({ className, children }) => {
  const { classes } = useTable()

  return <div className={clsx(classes.recordRow, className)}>{children}</div>
}

export default RecordRow
