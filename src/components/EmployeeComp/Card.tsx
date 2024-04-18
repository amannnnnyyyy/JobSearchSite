import React, { useState } from 'react'   
import { Employee } from './Employee'
import './Card.css'

function Card({photoPath,firstName,employeeId,registeredAt,fatherName,grandFName}: Employee) {
    const [isHovering, setIsHovering] = useState(false); // Add state to track hover

    const handleHover = () => {
      setIsHovering(!isHovering);
    }
  return ( 
    <div className={`card ${isHovering ? 'card-hover' : ''}`} style={{width: '18rem'}} onClick={()=>alert("Name: "+firstName+
    "\nFather's Name: "+fatherName+"\nGrandPa Name: "+grandFName+"\nId: "+employeeId)}
    onMouseEnter={handleHover} // Add event handler for hover
    onMouseLeave={handleHover} // Add event handler for hover off
   >
  <img src={photoPath} className="card-img-top" alt="..." height={300} width={150}/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title 
    and make up the bulk of the card's content.</p>
    <p className="card-text">Id: {employeeId}</p>
    <p className="card-text">Name: {firstName}</p>
    <p className="card-text"><small className="text-muted">{registeredAt.toLocaleDateString()}</small></p>
  </div>
</div>
   
  )
}

export default Card
