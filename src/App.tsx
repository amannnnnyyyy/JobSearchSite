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


function App(){

  const items = [
    "A simple default list group item",
    "A simple primary list group item","A simple secondary list group item",
    "A simple success list group item","A simple danger list group item",
    "A simple warning list group item","A simple info list group item",
    "A simple light list group item","A simple dark list group item"
]

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path = "/" element={<MainLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path = "/jobs" element={<JobsPage/>}/>
    </Route>
  
)
);

  return <RouterProvider router={router}/>
}

export default App;