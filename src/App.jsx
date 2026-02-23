import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import RecruiterLogin from "./pages/RecruiterLogin";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default Home Page */}
        <Route path="/" element={<Home />} />

        {/* Student Login */}
        <Route path="/student-login" element={<StudentLogin />} />

        {/* Recruiter Login */}
        <Route path="/recruiter-login" element={<RecruiterLogin />} />
      </Routes>
    </Router>
  );
}