import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Member from '../members/member.ts'

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 230 },
  { field: 'email', headerName: 'Email Address', width: 230 },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 1200 },
]

const paginationModel = { page: 0, pageSize: 5 }

interface MembersListProps {
  currentMembersList: Member[]
}

export default function MembersList({currentMembersList}: MembersListProps) {
  return (
    <DataGrid
      rows={currentMembersList}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{ border: 0 }}
    />
  )
}