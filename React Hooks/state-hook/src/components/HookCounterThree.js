import React, { useState } from 'react'

function HookCounterThree() {
	const [name, setName] = useState({ firstName: '', lastName: '' })
	return (
		<form>
      <input onChange={(e) => setName({...name, firstName: e.target.value })} type="text" />
      <input onChange={(e) => setName({...name, lastName: e.target.value })} type="text" />
      <h2>Your first name is {name.firstName}</h2>
      <h2>Your last name is {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
		</form>
	)
}

export default HookCounterThree
