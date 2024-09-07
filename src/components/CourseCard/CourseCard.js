import React, { useState } from 'react';
import './CourseCard.css';

function CourseCard(props) {
  // 步骤 1: 使用 useState 钩子声明状态变量和更新函数。
  // 'isEnrolled' 保存当前状态，'setIsEnrolled' 用于更新状态。
  const [isEnrolled, setIsEnrolled] = useState(false);

  // 步骤 2: 定义事件处理函数，当按钮被点击时更新状态。
  const handleEnroll = () => {
    // 步骤 3: 调用设置函数来更新状态。
    setIsEnrolled(true);
  };

  return (
    <div className="course-card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>课时数: {props.lessons}</p>

      {/* 步骤 4: 使用状态条件渲染按钮文本，基于 'isEnrolled' 的值。 */}
      <button onClick={handleEnroll}>
        {isEnrolled ? '已报名！' : '立即报名'}
      </button>
    </div>
  );
}

export default CourseCard;