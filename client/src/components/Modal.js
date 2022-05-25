import React from 'react'

const Modal=({active, setActive})=> {
  return (
    <div id="modal" onClick={()=>setActive(false)}>
        <div>
      Modal
    </div>
    </div>
  )
}
export default Modal