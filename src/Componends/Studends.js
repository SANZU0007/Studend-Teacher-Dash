import React, { useState } from "react";
import Base from "../Base/Base";

import { useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";

const Students = ({ students, setStudents }) => {
  const navigate = useNavigate();

  const deleteStudent = (studentId) => {
    const removeStudent = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(removeStudent);
  };

  // function naviGatetoEditpage(studentID) {
  //   navigate(`/edit/${studentID}`);
  // }

  return (
    <Base title={"student info"} description={"all student info"}>
      <Paper className="stud-collection">
        {students.map((stud, idx) => (
          <Paper elevation={10} className="stud-card" key={idx}>
            <h4>{stud.name}</h4>
            <p>batch: {stud.batch}</p>
            <p>gender: {stud.gender}</p>
            <p>education: {stud.education}</p>
            <div className="card-btn-group">
              <Button color="success" onClick={() => navigate(`/edit/${stud.id}`)}>edit</Button>
              <Button color="error" onClick={() => deleteStudent(stud.id)}>delete</Button>
            </div>
          </Paper>
        ))}
      </Paper>
    </Base>
  );
};

export default Students;
