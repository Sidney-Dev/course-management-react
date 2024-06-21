// src/components/Course.js
import React from 'react';

const Course = ({ name, image }) => {
  return (
    <div className="course">
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Course;
