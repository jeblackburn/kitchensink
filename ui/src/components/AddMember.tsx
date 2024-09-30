import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface AddMemberProps {
  submitNewMember: (name: string, email: string, phone: string) => void;
  onCancel: () => void;
}

export default function AddMember({submitNewMember, onCancel}: AddMemberProps) {
  return (
      <Dialog
        open={true}
        onClose={() => {}}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            console.log("SUBMIT")
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            const name = formJson.name;
            const phone = formJson.phone;
            submitNewMember(name, email, phone);
          },
        }}
      >
        <DialogTitle>Add Member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
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
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
  );
}