import { useState } from "react";
import "./App.css";
import Studends from "./Componends/Studends";
import { data } from "./Data/data";
import Dashboard from "./Componends/Dashboard";

import { Route, Routes } from "react-router-dom";
import Addstudent from "./Componends/Addstudent";
import Editstudents from "./Componends/Editstudents";
import Nopage from "./Componends/Nopage";
import Teachers from "./Componends/Teachers";

function App() {
  const [students, setStudents] = useState(data);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route
          path="/students"
          element={<Studends students={students} setStudents={setStudents} />}
        />
        <Route
          path="/add-student"  // Corrected path with leading slash
          element={<Addstudent students={students} setStudents={setStudents} />}
        />
        <Route
          path="/edit/:id"
          element={<Editstudents students={students} setStudents={setStudents} />}
        />
        <Route path="/teachers" element={<Teachers />} />
        
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
