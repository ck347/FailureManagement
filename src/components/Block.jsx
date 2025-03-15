import { useState, useEffect } from "react"

function Block({ studyTime, blockedWebsites }) {
  const [sessionType, setSessionType] = useState('study')
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [sessionCount, setSessionCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    if (timeLeft === 0) {
      if (sessionType === 'study') {
        setSessionType('break')
        setTimeLeft(5 * 60)
        alert('Time for a break!')
      } else {
        setSessionCount((prev) => prev + 1)
        if (sessionCount * 30 >= studyTime) {
          clearInterval(timer)
          alert('Study session complete!')
        } else {
          setSessionType('study')
          setTimeLeft(25 * 60)
          alert('Back to studying!')
        }
      }
    }

    return () => clearInterval(timer)
  }, [timeLeft, sessionType, sessionCount, studyTime])




  return (
    <div>
      <h1>{sessionType === 'study' ? 'Study Session' : 'Break Session'}</h1>
      <p>Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</p>
    </div>
  )
}

export default Block