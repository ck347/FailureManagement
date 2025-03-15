import { useState } from 'react'

function StudySetup({ onSetupComplete }) {
  const [studyTime, setStudyTime] = useState(30)


  const handleSubmit = (e) => {
    e.preventDefault()
    
    onSetupComplete(studyTime)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <div>Study Time (minutes):</div>
          <div>
          <input
            type="number"
            value={studyTime}
            onChange={(e) => setStudyTime(e.target.value)}
            step="30"
            min="30"
          />
          </div>
        </label>
        </div>
      <button type="submit">Start Studying</button>
    </form>
  )
}

export default StudySetup