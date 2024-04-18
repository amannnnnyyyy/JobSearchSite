import React from 'react'
import Emp, { EmployeeStatus } from './Employee'
import NavBar from './NavBar'


function Total() {
  return (
    <div>
        <Emp employeeId={''} photoPath={''} firstName={''} fatherName={''} grandFName={''} employeeStatus={EmployeeStatus.ACTIVE} courses={[]} dateOfBirth={new Date} registeredAt={new Date} />
    </div>
  )
}

export default Total
