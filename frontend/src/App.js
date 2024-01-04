// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserTypeSelection from './UserTypeSelection';
import StudentLogin from './StudentLogin'; // Create StudentLogin.js and TeacherLogin.js accordingly
import TeacherLogin from './TeacherLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserTypeSelection />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/teacher" element={<TeacherLogin />} />
      </Routes>
    </Router>
  );
}

export default App;


