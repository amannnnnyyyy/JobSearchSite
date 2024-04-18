import React from 'react'
import Modal from './Modal'

function Child() {
  return (
    <div>
      <Modal onClose={() => console.log('Modal Closed')} onSubmit={(data) => console.log(data)}>
  <h2>User Details</h2>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" />
  {/* Add more form fields as needed */}
</Modal>

    </div>
  )
}

export default Child
