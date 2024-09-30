import { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Member from '../members/member.ts'
import MembersList from './MembersList.tsx'
import { Button } from '@mui/material'
import AddMember from './AddMember.tsx'

export default function MembersPage() {
  const [currentMembersList, setCurrentMembersList] = useState<Member[]>([])
  const [showMemberPopup, setShowMemberPopup] = useState(false)

  function sendNewMember(name: string, email: string, phone: string) {
    fetch("/api/members", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phoneNumber: phone })
    }).catch((err) => {
      console.log("OH NO", err)})
    setShowMemberPopup(false);
  }

  useEffect(() => {
    if (!showMemberPopup) {
      fetch('/api/members')
        .then(response => response.json())
        .then(data => {
          console.log('got some data', data)
          const members = data['_embedded']['members'] as Member[]
          setCurrentMembersList(members)
        });
    }
  }, [showMemberPopup])

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <MembersList currentMembersList={currentMembersList}/>
      {showMemberPopup && <AddMember submitNewMember={sendNewMember} onCancel={() => setShowMemberPopup(false)}/>}
      <Button onClick={() => setShowMemberPopup(true)}>Add a Member</Button>
    </Paper>
  )

}