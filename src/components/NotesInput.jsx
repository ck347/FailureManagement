import { useState } from 'react'

function NotesInput({ onNotesSubmit }) {
  const [notes, setNotes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onNotesSubmit(notes)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
            <div>Enter your notes: </div>
          <div><textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="10"
            cols="50"
          /></div>
        </label>
      </div>
      <button type="submit">Submit Notes</button>
    </form>
  )
}

export default NotesInput