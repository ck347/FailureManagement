import { useState } from 'react'
import './App.css'
import NotesInput from './components/NotesInput'
import QuestionGenerator from './components/QuestionGenerator'
import StudySetup from './components/StudySetup'
import Block from './components/block'

function App() {
  const [notes, setNotes] = useState('')
  const [notesSubmitted, setNotesSubmitted] = useState(false)
  const [setupComplete, setSetupComplete] = useState(false)
  const [studyTime, setStudyTime] = useState(0)
  const blockedWebsites = ['example.com', 'anotherexample.com'] // Define blockedWebsites

  const handleSetupComplete = (time) => {
    setStudyTime(time)
    setSetupComplete(true)
  }

  const handleNotesSubmit = (submittedNotes) => {
    setNotes(submittedNotes)
    setNotesSubmitted(true)
  }

  return (
    <div>
      {setupComplete ? (
        <Block studyTime={studyTime} />
      ) : (
        <StudySetup onSetupComplete={handleSetupComplete} />
      )}
      {notesSubmitted ? (
        <QuestionGenerator notes={notes} />
      ) : (
        <NotesInput onNotesSubmit={handleNotesSubmit} />
      )}
    </div>
  )
}

export default App