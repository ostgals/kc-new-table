import { Table } from '../components/TableNext'
import { users } from '../data'

export default function ColumnsAsProp() {
  return (
    <Table
      records={users}
      onClickRecord={user => console.log(user.name)}
      columns={[
        { label: 'Id', value: user => user.id, width: '65px' },
        {
          label: 'Full Name',
          value: user => user.firstName + ' ' + user.lastName,
          width: '2fr',
        },
        {
          label: 'Born',
          value: user => new Date(user.birthDate).toDateString(),
          width: '1fr',
        },
        {
          label: 'Test overflow overflow overflow',
          value: () => 'Test overflow overflow overflow',
          width: '100px',
        },
      ]}
    />
  )
}
