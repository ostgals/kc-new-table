import { Table } from '../components/TableNext'
import { users } from '../data'
import { logUser } from '../utils'

export default function ColumnsAsProp() {
  return (
    <Table
      records={users}
      onClickRecord={logUser}
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
          value: () => (
            <span>
              Test <b>overflow overflow overflow</b>
            </span>
          ),
          width: '100px',
        },
      ]}
    />
  )
}
