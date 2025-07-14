import React, { useState } from 'react'

const Switcher = () => {
const [sw,setSw]=useState(false);

  return (
    <div>
{ sw ? (
    <span>Dark mood</span>
): (
    <span>Light</span>
)}
<br />

<input type="text" />
<button onClick={()=>setSw(()=> !sw)}>Switch</button>

    </div>
  )
}

export default Switcher