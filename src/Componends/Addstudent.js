import React, { useState } from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const Addstudent = ({students,setStudents}) => {
  
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const navigate = useNavigate()

  const handledAddstudent = () => {
    const newStudent = {
      id,
      name,
      batch,
      gender,
      education,
    };
    
    setStudents([...students, newStudent])
    navigate("/students")
    
  };

  return (

    <Base
    title = {"fill the form to new student data"}
    description = {"Add student"}>


    
    <div className="form-group">
      <h4>Add student</h4>
      

      <TextField  label="Outlined" variant="outlined"  fullWidth sx={{ m: 1 }} 
        placeholder="enter the id of student"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <TextField  label="Outlined" variant="outlined"  fullWidth sx={{ m: 1 }} 
        placeholder="enter the name  of student"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField  label="Outlined" variant="outlined"  fullWidth sx={{ m: 1 }} 
        placeholder="enter the batch of student"
        type="text"
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
      />
      <TextField  label="Outlined" variant="outlined"  fullWidth sx={{ m: 1 }} 
        placeholder="enter the gender of student"
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <TextField  label="Outlined" variant="outlined"  fullWidth sx={{ m: 1 }} 
        placeholder="enter the education of student"
        type="text"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <Button onClick={handledAddstudent}
      variant="contained"> Add students</Button>
    </div>
    </Base>
    
  );
};

export default Addstudent;
