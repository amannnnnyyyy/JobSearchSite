import React from 'react'
import NavScrollExample from './NavBar';
import Card from './Card';
import NavBar from './NavBar';
import AddEmployee from './AddEmployee';


export enum EmployeeStatus{
    ACTIVE,INACTIVE
}
export enum CreditHour{
    ONE,TWO,THREE,FOUR
}

export interface Courses{
    courseId:string;
    courseName:string;
    creditHour:CreditHour;
    description:string;
}

export interface Employee{
    employeeId:string;
    photoPath:string;
    firstName:string;
    fatherName:string;
    grandFName:string;
    employeeStatus:EmployeeStatus;
    courses:Courses[];
    dateOfBirth:Date;
    registeredAt:Date;
}


function Emp({photoPath,firstName,employeeId}:Employee) {
   
    const photos = [
        {url:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", 
            name:"Olivia",id:"1677"},
        {url:
            "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            name:"Derek",id:"1765"},
        {url:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
            name:"Gustavo",id:"1775"},
    ]
    const names:string = ''+photos.map(name => name.name);
  return (
    <>
    {photos.map}
    <NavBar firstName={names} employeeId={''} photoPath={''} fatherName={''} grandFName={''} employeeStatus={"/home/aman/Documents/React/first-react-app/src/components/EmployeeComp/Employee".ACTIVE} courses={[]} dateOfBirth={undefined} registeredAt={undefined}/>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent:'center' }}>
    {photos.map((details,index)=>(
        <Card key={index} photoPath={details.url} firstName={details.name} employeeId={details.id} 
        fatherName={'Some'} grandFName={'One'} employeeStatus={EmployeeStatus.ACTIVE} courses={[]} 
        dateOfBirth={new Date} registeredAt={new Date} />
    ))}
    </div>
    </>
  )
}

export default Emp
