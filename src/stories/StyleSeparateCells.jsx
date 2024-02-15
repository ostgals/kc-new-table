import { makeStyles, withStyles } from '@material-ui/core'
import { Column, Table } from '../components/TableNext'
import { users } from '../data'
import { orange } from './styles'
import { logUser } from '../utils'

const OrangeTable = withStyles(orange)(Table)

const StyleSeparateCells = () => {
  const classes = useStyles()

  return (
    <OrangeTable records={users} onClickRecord={logUser}>
      <Column label="Id" value={user => user.id} width="65px" />
      <Column
        label="Full Name"
        value={user => user.firstName + ' ' + user.lastName}
        width="2fr"
      />
      <Column
        label="Born"
        value={user => new Date(user.birthDate).toDateString()}
      />
      <Column
        label="# of skills"
        value={user => user.numOfSkills}
        align="center"
        classes={{ value: classes.numOfSkills }}
      />
    </OrangeTable>
  )
}

const useStyles = makeStyles({
  numOfSkills: {
    placeSelf: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    background: 'aqua',
    lineHeight: '24px',
    zIndex: 1,
  },
})

export default StyleSeparateCells
