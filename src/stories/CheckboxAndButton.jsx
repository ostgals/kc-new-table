import { makeStyles, withStyles } from '@material-ui/core'
import {
  Column,
  ColumnLabels,
  HeaderRow,
  RecordRow,
  RecordValues,
  Table,
} from '../components/TableNext'
import { users } from '../data'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import CellButton from '../components/TableNext/CellButton'
import { cardsTableStyles } from './styles'
import { logUser } from '../utils'
import CellCheckbox from '../components/TableNext/CellCheckbox'

const LikeCardsTable = withStyles(cardsTableStyles)(Table)

export default function CheckboxAndButton() {
  const classes = useStyles()

  return (
    <LikeCardsTable
      records={users}
      renderHeader={() => (
        <HeaderRow className={classes.row}>
          <CellCheckbox color="secondary" indeterminate />
          <ColumnLabels />
        </HeaderRow>
      )}
      renderRecord={user => (
        <RecordRow key={user.id} className={classes.row}>
          <CellCheckbox />
          <RecordValues record={user} onClick={logUser} />
          <CellButton icon={faTrashAlt} />
        </RecordRow>
      )}
      classes={{ recordRow: classes.tableRecordRow }}
    >
      <Column label="Id" value={user => user.id} width="65px" />
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
    </LikeCardsTable>
  )
}

const useStyles = makeStyles(theme => ({
  row: {
    display: 'grid',
    gridTemplateColumns: '40px 1fr 40px',
  },
  tableRecordRow: {
    color: theme.palette.primary.main,
  },
}))
