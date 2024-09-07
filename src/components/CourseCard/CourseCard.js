import React from 'react';
import './CourseCard.css'; // Importing the external CSS file

// Course Card Component
function CourseCard(props) {
  return (
    <div className="course-card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Number of Lessons: {props.lessons}</p>
      <button>Enroll Now</button>
    </div>
  );
}

export default CourseCard;