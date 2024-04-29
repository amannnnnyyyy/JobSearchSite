import React from 'react'
import Hero from '../Hero'
import HomeCards from '../HomeCards';
import JobListings from '../JobListings';
import ViewAllJobs from '../ViewAllJobs';
import Collapsable from '../Collapsable';

const HomePage = () => {
     return (
    <div>
      <Collapsable/>
      <HomeCards />
      <JobListings isHome={true}/>
      <ViewAllJobs />
    </div>
  )
}

export default HomePage
