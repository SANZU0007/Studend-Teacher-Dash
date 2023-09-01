import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { useNavigate, useParams } from "react-router-dom";

const Editstudents = ({ students, setStudents }) => {
  const { id } = useParams();

  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const studentData = students.find((stud) => stud.id === id);
    if (studentData) {
      setIdx(studentData.id);
      setName(studentData.name);
      setBatch(studentData.batch);
      setGender(studentData.gender);
      setEducation(studentData.education);
    }
  }, [id, students]);

  const updateStudent = () => {
    const updatedStudent = {
      id: idx,
      name,
      batch,
      gender,
      education,
    };

    const updatedStudents = students.map((stud) =>
      stud.id === id ? updatedStudent : stud
    );

    setStudents(updatedStudents);
    navigate("/students");
  };

  return (
    <Base title={"Fill in to edit the student"} description={"Edit student info"}>
      <div className="form-group">
        <h4>Update</h4>

        <input
          placeholder="Enter the ID of the student"
          type="number"
          value={idx}
          onChange={(e) => setIdx(e.target.value)}
        />
        <input
          placeholder="Enter the name of the student"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter the batch of the student"
          type="text"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
        <input
          placeholder="Enter the gender of the student"
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          placeholder="Enter the education of the student"
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <button onClick={updateStudent}>Update Student</button>
      </div>
    </Base>
  );
};

export default Editstudents;
