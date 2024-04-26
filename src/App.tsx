import Emp from "./components/EmployeeComp/Employee";
import Total from "./components/EmployeeComp/Total";
import Hero from "./components/jobList/Hero";
import HomeCards from "./components/jobList/HomeCards";
import JobListings from "./components/jobList/JobListings";
import JobListing from "./components/jobList/JobListings";
import NavBar from "./components/jobList/NavBar";
import ViewAllJobs from "./components/jobList/ViewAllJobs";
import { ListGroup } from "./components/ListGroup";
import { Hey } from "./Hey";
import { BrowserRouter as Router, Route, Routes, BrowserRouter,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import HomePage from "./components/jobList/pages/HomePage";
import MainLayout from "./components/jobList/layouts/MainLayout";
import JobsPage from "./components/jobList/pages/JobsPage";
import NotFoundPage from "./components/jobList/pages/NotFoundPage";
import JobPage, { jobLoader } from "./components/jobList/pages/JobPage";
import AddJobPage from "./components/jobList/pages/AddJobPage";

interface Job {
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company:{
    companyName: string;
    companyDescription: string;
    contactEmail: string;
    contactPhone: string;
  },
}


function App(){

  const items = [
    "A simple default list group item",
    "A simple primary list group item","A simple secondary list group item",
    "A simple success list group item","A simple danger list group item",
    "A simple warning list group item","A simple info list group item",
    "A simple light list group item","A simple dark list group item"
]

//add new job

const addJob:  (job: Job) => void = async (job) => {
  const res = await fetch('/api/jobs',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job),
    }

  );
  return;
};
  

//delete job
const deleteJob = async (id)=>{
  const res = await fetch(`/api/jobs/${id}`,
    {
      method:'DELETE',
     
    }

  );
  return;
}


//edit job
const editJob:  (job: Job) => void = async (job) => {
  const res = await fetch(`/api/jobs/${id}`,
    {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job),
    }

  );
  return;
};

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path = "/" element={<MainLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path = "/jobs" element={<JobsPage/>}/>
        <Route path = "/jobs/:id" element={<JobPage deleteJob={deleteJob} editJob={editJob}/>} loader={jobLoader}/>
        <Route path = "/edit-job/:id" element={<AddJobPage addJobSubmit={addJob}/>} loader={jobLoader}/>
        <Route path = "/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  
)
);

  return <RouterProvider router={router}/>
}

export default App;