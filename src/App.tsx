import Emp from "./components/EmployeeComp/Employee";
import Total from "./components/EmployeeComp/Total";
import Hero from "./components/jobList/Hero";
import HomeCards from "./components/jobList/HomeCards";
import NavBar from "./components/jobList/NavBar";
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

    

    {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Full-Time</div>
                <h3 className="text-xl font-bold">Senior React Developer</h3>
              </div>

              <div className="mb-5">
               We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
              </div>

              <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Boston, MA
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 2 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold">Front-End Engineer (React)</h3>
              </div>

              <div className="mb-5">
               Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
              </div>

              <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Miami, FL
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 3 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold">React.js Developer</h3>
              </div>

              <div className="mb-5">
                Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
              </div>

              <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Brooklyn, NY
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a>
    </section>
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