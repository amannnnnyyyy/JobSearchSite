import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SlArrowDown } from "react-icons/sl";
import Hero from './Hero';

const Collapsable = () => {
        const [detailsVisible, setDetailsVisible] = useState(true);
      
        const handleAccordionClick = () => {
          setDetailsVisible(!detailsVisible);
        };
    const heroTitle = 'Developer Jobs';
  const heroSubTitle = 'Find the programming job that fits your skillset!';
 
  return (
    <>
    <div>
      <Accordion expanded={detailsVisible} onClick={handleAccordionClick}>
        <AccordionSummary
        expandIcon={<SlArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="bg-indigo-700 border-b border-indigo-500"
          style={{ 
            display: detailsVisible ? 'none' : 'flex', 
            justifyContent: 'center' }}
        >
         
        </AccordionSummary>
        <AccordionDetails>
          <Hero title={heroTitle} subTitle={heroSubTitle}/>
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  )
}

export default Collapsable
