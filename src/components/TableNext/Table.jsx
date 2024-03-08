import { Children } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import ColumnLabels from './ColumnLabels'
import RecordValues from './RecordValues'
import TableContext from './TableContext'
import Column from './Column'
import { calcGridTemplateColumns } from './utils'
import RecordRow from './RecordRow'
import HeaderRow from './HeaderRow'

const Table = ({
  columns: columnsProp,
  records,
  onClickRecord,
  classes: classesProp,
  className,
  children,

  recordGap = 9,
  columnGap = 8,
  recordsDropShadow = true,

  renderHeader = () => (
    <HeaderRow>
      <ColumnLabels />
    </HeaderRow>
  ),
  renderRecord = (record, index) => (
    <RecordRow key={index}>
      <RecordValues record={record} onClick={onClickRecord} />
    </RecordRow>
  ),
}) => {
  const columns =
    columnsProp ??
    Children.map(children, (child, index) => {
      if (child?.type === Column) {
        return {
          key: child.key || index,
          ...child.props,
        }
      }
    }).filter(Boolean)

  const gridTemplateColumns = calcGridTemplateColumns(columns)

  const classes = useStyles({
    gridTemplateColumns,
    recordGap,
    columnGap,
    recordsDropShadow,
    classes: classesProp,
  })

  return (
    <TableContext.Provider value={{ columns, classes }}>
      <div className={clsx(classes.root, className)}>
        {renderHeader && <div className={classes.head}>{renderHeader()}</div>}

        <div className={classes.body}>
          {records.map(
            (record, index) => renderRecord?.(record, index) ?? null
          )}
        </div>
      </div>
    </TableContext.Provider>
  )
}

const useStyles = makeStyles(
  theme => ({
    // basic layout
    root: {
      position: 'relative',
      overflow: 'auto',
      background: theme.palette.backgroundPrimary,
    },
    head: {
      background: 'inherit',
      position: 'sticky',
      top: 0,
      padding: theme.spacing(0, 3),
      zIndex: 2,
    },
    body: {
      position: 'relative',
      padding: theme.spacing(0, 3, 2),
      display: 'flex',
      flexDirection: 'column',
      gap: props => props.recordGap,
    },

    // default header/record styles
    headerRow: {
      display: 'grid',
      height: 40,
      overflow: 'hidden',
    },
    recordRow: {
      display: 'grid',
      justifyContent: 'normal',
      height: 40,
      background: 'white',
      borderRadius: 2,
      boxShadow: props =>
        props.recordsDropShadow ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' : null,
      overflow: 'hidden',
    },

    cellContainer: {
      boxSizing: 'border-box',
      padding: theme.spacing(0, 2),
      minWidth: '100%',
      width: 'fit-content',
      height: '100%',
      display: 'grid',
      placeItems: 'center stretch',
      color: theme.palette.primary.main,
      gridTemplateColumns: props => props.gridTemplateColumns,
      gap: props => props.columnGap,
    },
    cell: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    // label/value specific formatting
    labelCell: {
      fontSize: 12,
      color: '#757575',
    },
    valueCell: {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  }),
  { name: 'Table' }
)

export default Table
