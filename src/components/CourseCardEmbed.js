// CourseCardEmbed.js

import React from 'react';

const name = "John";
const isLoggedIn = true;

function CourseCardEmbed() {

    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>{isLoggedIn ? "Welcome back!" : "Please sign in."}</p>
        </div>
    );
}

export default CourseCardEmbed;
