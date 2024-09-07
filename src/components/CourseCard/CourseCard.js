import React from 'react';
import './CourseCard.css'; // Importing the external CSS file

// Course Card Component
function CourseCard({ title, instructor, isEnrolled, rating }) {
  return (
    <div className="course-card">
      {/* Embedding expressions for dynamic content */}
      <h2 className="course-title">{title}</h2>
      <p>Instructor: {instructor}</p>
      
      {/* Conditional rendering based on enrollment status */}
      {isEnrolled ? (
        <p className="enrolled-text">You are enrolled in this course.</p>
      ) : (
        <p className="not-enrolled-text">Not enrolled yet.</p>
      )}
      
      {/* Display rating if available, using conditional rendering */}
      {rating && <p>Course Rating: {rating} / 5</p>}
      
      {/* Conditionally render "Enroll" button if not enrolled */}
      {!isEnrolled && <button className="enroll-button">Enroll Now</button>}
    </div>
  );
}

export default CourseCard;