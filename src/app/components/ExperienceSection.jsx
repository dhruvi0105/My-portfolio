'use client'; // This directive marks the component as a Client Component

import React from 'react'
import PrismIcon from "../../../public/images/prism-logo.png";
import RelianceIcon from "../../../public/images/ril-icon.png";
import Experience from './Experience';

const Experiences = () => {
  return (
    <section id = 'experiences'>
    <div>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Professional Experiences
      </h2>
    </div>
    <div>
      <Experience
        logo={PrismIcon}
        alt="Organization 1 Logo"
        description="Working on designing, implementing, and optimizing ML model for Human Activity Recognition using Lightweight Transformers."
        role="Research Intern"
        duration="June 2024 - Present"
      />
      <Experience
        logo={RelianceIcon}
        alt="Organization 2 Logo"
        description="Developed and optimized a machine learning model to predict operational time of the refractory wall of a gasifier plant
using scikit-learn, TensorFlow, and various ML libraries. Utilizing pyodbc for database connectivity and Seaborn for data
visualization."
        role="Machine Learning  Intern"
        duration="June 2024 - July 2024"
      />
    </div>

    </section>
  );
};

export default Experiences;
