import React from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
import "../Style/Student.css"

const Students = ({ students, setStudents }) => {
  const navigate = useNavigate();

  const deleteStudent = (studentId) => {
    const removeStudent = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(removeStudent);
  };

  return (
    <Base title={"Student Info"} description={"All Student Info"}>
      <div id="stud-collection">
        {students.map((stud, idx) => (
          <div className="stud-card" key={idx}>
            <h4 id="style">{stud.name}</h4>
            <p>Batch: {stud.batch}</p>
            <p>Gender: {stud.gender}</p>
            <p>Education: {stud.education}</p>
            <div className="card-btn-group">
              <button
                className="edit-button"
                onClick={() => navigate(`/edit/${stud.id}`)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteStudent(stud.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
};

export default Students;
