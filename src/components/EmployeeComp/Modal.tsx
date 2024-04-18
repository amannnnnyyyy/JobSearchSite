import React, { useState } from 'react';
import Child from './Child';
//import './Modal.css'; // Import your CSS for styling (optional)

function Modal({ onClose, onSubmit, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose(); // Call the optional onClose function
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSubmit && onSubmit(new FormData(event.target)); // Call the optional onSubmit function with form data
  };

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <button type="button" onClick={handleClose} className="close-btn">
          &times;
        </button>
        {children}
        <form onSubmit={handleSubmit}>
            <Child/>
          {/* Form fields for user input go here */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
