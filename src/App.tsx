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
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";


function App(){
  const heroTitle = 'Developer Jobs';
  const heroSubTitle = 'Find the programming job that fits your skillset!';

  const items = [
    "A simple default list group item",
    "A simple primary list group item","A simple secondary list group item",
    "A simple success list group item","A simple danger list group item",
    "A simple warning list group item","A simple info list group item",
    "A simple light list group item","A simple dark list group item"
]

  return (
    <>
    <NavBar />
    <Hero title={heroTitle} subTitle={heroSubTitle}/>
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
   
      <BrowserRouter>
        <Routes>
        <Route path="/employee" element={<Total/>} />
          <Route path="/list" element={<ListGroup items={items} heading="List"/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;