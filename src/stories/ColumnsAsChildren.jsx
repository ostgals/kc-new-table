import { users } from '../data'
import { Column, Table } from '../components/TableNext'

export default function ColumnsAsChildren({ classes }) {
  return (
    <Table
      records={users}
      onClickRecord={user => console.log(user.name)}
      classes={classes}
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
      />
      <Column
        label="# of skills"
        value={user => user.numOfSkills}
        align="center"
      />
    </Table>
  )
}
