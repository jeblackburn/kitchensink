import { useState } from 'react'
import './App.css'
import MembersPage from './components/MembersPage.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <MembersPage/>
      </div>
  )
}

export default App
