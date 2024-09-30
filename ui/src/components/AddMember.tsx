import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

interface AddMemberProps {
  submitNewMember: (name: string, email: string, phone: string) => void;
  onCancel: () => void;
}

const phoneNumberRegEx = new RegExp('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$')
const emailRegEx = new RegExp('^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$')

export default function AddMember({ submitNewMember, onCancel }: AddMemberProps) {
  const [nameValue, setNameValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  function isNameInvalid(): boolean {
    return nameValue.length == 0
  }

  function isPhoneInvalid(): boolean {
    return !phoneNumberRegEx.test(phoneValue)
  }

  function isEmailInvalid(): boolean {
    return !emailRegEx.test(emailValue)
  }

  function isFormValid(): boolean {
    return isNameInvalid() || isPhoneInvalid() || isEmailInvalid()
  }

  return (
    <Dialog
      open={true}
      onClose={() => {
      }}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          console.log("SUBMIT", nameValue, emailValue, phoneValue)
          event.preventDefault()
          submitNewMember(nameValue, emailValue, phoneValue)
        },
      }}
    >
      <DialogTitle>Add Member</DialogTitle>
      <DialogContent>
        <TextField
          value={nameValue}
          autoFocus
          required
          onChange={(evt) => setNameValue(evt.target.value)}
          error={isNameInvalid()}
          helperText={isNameInvalid() ? 'Name is required.' : ""}
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="string"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          onChange={(evt) => setEmailValue(evt.target.value)}
          error={isEmailInvalid()}
          helperText={isEmailInvalid() ? 'e.g. taylor@swifties.com' : ""}
          required
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          error = {isPhoneInvalid()}
          onChange={(evt) => setPhoneValue(evt.target.value)}
          helperText={isPhoneInvalid() ? 'e.g. 123-456-7890' : ""}
          margin="dense"
          id="phone"
          name="phone"
          label="Phone Number"
          type=""
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={isFormValid()}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}