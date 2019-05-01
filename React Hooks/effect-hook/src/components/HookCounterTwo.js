import React, {useState, useEffect} from 'react'

function HookCounterTwo() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    console.log('useFffect called')
    window.addEventListener('mousemove', e => {
      setX(e.clientX)
      setY(e.clientY)
    })
  }, [])
  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  )
}

export default HookCounterTwo
