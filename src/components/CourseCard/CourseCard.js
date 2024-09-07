import React, { useState } from 'react';
import './CourseCard.css'; // Importing the external CSS file

// Course Card Component
function CourseCard(props) {
  const [isEnrolled, setIsEnrolled] = useState(false);

  function handleEnroll() {
    setIsEnrolled(true);
  }

  return (
    <div className="course-card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Number of Lessons: {props.lessons}</p>
      <button onClick={handleEnroll}>
        {isEnrolled ? 'Enrolled!' : 'Enroll Now'}
      </button>
    </div>
  );
}

export default CourseCard;