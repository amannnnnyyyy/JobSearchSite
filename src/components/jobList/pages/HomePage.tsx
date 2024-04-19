import React from 'react'
import Hero from '../Hero'
import HomeCards from '../HomeCards';
import JobListings from '../JobListings';
import ViewAllJobs from '../ViewAllJobs';

const HomePage = () => {
    const heroTitle = 'Developer Jobs';
  const heroSubTitle = 'Find the programming job that fits your skillset!';
  return (
    <div>
      <Hero title={heroTitle} subTitle={heroSubTitle}/>
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </div>
  )
}

export default HomePage
