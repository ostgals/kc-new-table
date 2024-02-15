import { MenuItem, Select, makeStyles, withStyles } from '@material-ui/core'
import { useState } from 'react'
import { Column, RecordRow, RecordValues, Table } from '../components/TableNext'
import { users } from '../data'
import { alertUser } from '../utils'
import { cardsTableStyles } from './styles'
import clsx from 'clsx'

const GrayTable = withStyles(cardsTableStyles)(Table)

const InteractiveCells = () => {
  const classes = useStyles()

  const [activeUsers, setActiveUsers] = useState({})

  const isUserActive = user => activeUsers[user.id] === true

  const toggleUser = (user, isActive) =>
    setActiveUsers(prev => ({ ...prev, [user.id]: isActive }))

  return (
    <GrayTable
      records={users}
      renderRecord={user => (
        <RecordRow
          key={user.id}
          className={clsx(classes.recordRow, { inactive: !isUserActive(user) })}
        >
          <RecordValues record={user} onClick={alertUser} />
        </RecordRow>
      )}
    >
      <Column label="Id" value={user => user.id} interactive width="65px" />
      <Column
        label="Full Name"
        value={user => user.firstName + ' ' + user.lastName}
        width="2fr"
      />
      <Column
        label="Born"
        value={user => new Date(user.birthDate).toDateString()}
        width="1fr"
      />
      <Column
        label="# of skills"
        value={user => user.numOfSkills}
        align="center"
      />
      <Column
        label="Status"
        interactive
        value={user => (
          <Select
            value={isUserActive(user)}
            onChange={e => toggleUser(user, e.target.value)}
            fullWidth
            className={classes.select}
          >
            <MenuItem value={false}>Inactive</MenuItem>
            <MenuItem value={true}>Active</MenuItem>
          </Select>
        )}
        width="100px"
      />
    </GrayTable>
  )
}

const useStyles = makeStyles({
  recordRow: {
    '&.inactive': { background: 'lightgray' },
  },
  select: {
    fontSize: 'inherit',
  },
})

export default InteractiveCells
