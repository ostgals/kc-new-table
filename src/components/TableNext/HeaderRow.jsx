import clsx from 'clsx'

import { useTable } from './utils'

const HeaderRow = ({ className, children }) => {
  const { classes } = useTable()

  return <div className={clsx(classes.headerRow, className)}>{children}</div>
}

export default HeaderRow
