import { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import Member from '../members/member.ts'

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 230 },
  { field: 'email', headerName: 'Email Address', width: 230 },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 1200 },
]

const paginationModel = { page: 0, pageSize: 5 }

export default function MembersPage() {
  const [currentMembersList, setCurrentMembersList] = useState<Member[]>([])

  useEffect(() => {
    fetch('/api/members')
      .then(response => response.json())
      .then(data => {
        console.log('got some data', data)
        const members = data['_embedded']['members'] as Member[]
        setCurrentMembersList(members)
      });
  }, [])

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={currentMembersList}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  )

}