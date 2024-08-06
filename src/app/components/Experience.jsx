'use client'; // This directive marks the component as a Client Component

import React from 'react';
import Image from 'next/image';

const Experience = ({ logo, alt, description, role, duration }) => {
  return (
    
    <section className="experience">
      <div className="logo-container">
        <Image src={logo} alt={alt} width={100} height={100} />
      </div>
      <div className="details">
        <h2>{role}</h2>
        <p>{description}</p>
        <p><strong>Duration:</strong> {duration}</p>
      </div>

      <style jsx>{`
        .experience {
          display: flex;
          align-items: center;
          margin: 20px 0;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .logo-container {
          flex: 0 0 100px;
          margin-right: 20px;
        }
        .details {
          flex: 1;
        }
        h2 {
          margin: 0 0 10px;
        }
        p {
          margin: 5px 0;
        }
      `}</style>
    </section>
  );
};

export default Experience;
