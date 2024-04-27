import React, { useState } from 'react'
  import { Button, Image, Modal } from 'react-bootstrap';
  import {FaMapMarker} from 'react-icons/fa'
  import { Link } from 'react-router-dom';
  interface job{
      job:{
      id: string;
      title: string;
      type: string;
      image:string;
      description: string;
      location: string;
      salary: string;
      company: {
          name: string;
          description: string;
          contactEmail: string;
          contactPhone: string;
      };
  }
  }
  const JobListing = ({job}:job) => {
    
      const [viewRest,setViewRest] = useState(false);
      const [showDescription, setShowDescription] = useState(false);
      let description =job.description;
  if (!viewRest){
      description = description.substring(0,90) + "...";
  }

    return (
      <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>
              <div className="d-flex justify-content-center"> {/* Use Bootstrap grid for centering */}
          <div className="image-container">  {/* Wrap image in a container */}
           
              <Image className='image zoom-in-hover' onClick={()=>setShowDescription(true)}
        src={job.image}
        alt={job.title}
        style={{ width: '350px', height: '300px' ,borderRadius:'20px', transition: 'transform 0.2s'}} // Set fixed dimensions
      />
      <Modal show={showDescription} onHide={() => setShowDescription(false)}>
        <Modal.Header closeButton>
        <Image className='image zoom-in-hover'
        src={job.image}
        alt={job.title}
        style={{ width: '350px', height: '300px' ,borderRadius:'20px', transition: 'transform 0.2s'}} // Set fixed dimensions
      /><br></br>
          {/* <Modal.Title>Description</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {job.description}
          </Modal.Body>
          <Modal.Body>
          {job.salary}
          </Modal.Body>
        <Modal.Footer>
      
        </Modal.Footer>
      </Modal>
      </div></div>
              <button className="text-indigo-500 mb-5 hover:text-indigo-600" 
              onClick={()=>setShowDescription(true)} >{viewRest?<div>{description}</div>:"show description"}</button>
  

              <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                  {job.location}
                </div>
                <Link
                  to={`/jobs/${job.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                Read More
                </Link>
              </div>
            </div>
          </div>
    )
  }

  export default JobListing
