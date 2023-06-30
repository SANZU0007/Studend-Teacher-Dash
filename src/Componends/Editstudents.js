import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Editstudents = ({ studId, students,setStudents }) => {

 
  const {id} = useParams();
  
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
  }, [studId, students]);

  const updateStudent = ()=>{
    const studentIndex = students.findIndex((stud)=>stud.id === id)
  const updatedStudent = {
    id,
    name,
    batch,
    gender,
    education
  }
  students[studentIndex] = updatedStudent
  setStudents([...students])
  navigate("/students")
}

  return (
    

    <Base
    title ={"fil in to edit the student "}
    description ={"Edit student info"}>

    
    <div className="form-group">
      <h4>update</h4>

      <input
        placeholder="enter the id of student"
        type="number"
        value={idx}
        onChange={(e) => setIdx(e.target.value)}
      />
      <input
        placeholder="enter the name  of student"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="enter the batch of student"
        type="text"
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
      />
      <input
        placeholder="enter the gender of student"
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        placeholder="enter the education of student"
        type="text"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <button onClick={updateStudent}>updatedStudent</button>
    </div>
    </Base>
   
  );
};

export default Editstudents;
