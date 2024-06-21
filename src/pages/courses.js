// src/pages/Courses.js
import React from 'react';
import Course from '../components/Course';

const Courses = () => {
  // Mock data for courses (replace with your actual data)
  const courses = [
    {
      id: 1,
      name: 'Course 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Course 2',
      image: 'https://via.placeholder.com/150',
    },
    // Add more courses as needed
  ];

  return (
    <div className="courses">
      <h1>Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <Course key={course.id} name={course.name} image={course.image} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
