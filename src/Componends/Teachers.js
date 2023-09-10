import React, { useState } from "react";
import EditTeacher from "./EditTeacher";
import DeleteTeacher from "./DeleteTeacher";
import AddTeacher from "./AddTeacher";
import { Typography } from "@mui/material";
import "../Style/teacherss.css"; // Import your CSS stylesheet
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

// Define CSS classes for your component
const classNames = {
  container: "teachers-container",
  title: "teacher-list-title",
  addButton: "add-button",
  editButton: "edit-button",
};

export const teachersData = [
  {
    id: 1,
    name: "Mr. Johnson",
    contact: "teacher@example.com",
    subject: "Math",
  },
  {
    id: 2,
    name: "Ms. Anderson",
    contact: "teacher2@example.com",
    subject: "Science",
  },
  // Add more teacher data here
];

function Teachers() {
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [teachers, setTeachers] = useState(teachersData);
  const [isAddTeacherOpen, setIsAddTeacherOpen] = useState(false);

  const handleEditTeacher = (teacher) => {
    setEditingTeacher(teacher);
  };

  const handleCancelEdit = () => {
    setEditingTeacher(null);
  };

  const handleUpdateTeacher = (updatedTeacher) => {
    const updatedTeachers = teachers.map((teacher) =>
      teacher.id === updatedTeacher.id ? updatedTeacher : teacher
    );
    setTeachers(updatedTeachers);
    setEditingTeacher(null);
  };

  const handleDeleteTeacher = (teacherId) => {
    const updatedTeachers = teachers.filter(
      (teacher) => teacher.id !== teacherId
    );
    setTeachers(updatedTeachers);
    setEditingTeacher(null);
  };

  const handleAddTeacher = (newTeacher) => {
    // Generate a unique ID for the new teacher
    const newTeacherWithId = { ...newTeacher, id: teachers.length + 1 };
    // Add the new teacher to the list
    setTeachers([...teachers, newTeacherWithId]);
    // Close the Add Teacher form
    setIsAddTeacherOpen(false);
  };

  const handleAddTeacherClick = () => {
    setIsAddTeacherOpen(!isAddTeacherOpen);
  };

  return (
    <div className={classNames.container}>
      <Typography variant="h4" className={classNames.title}>
        Teacher List
      </Typography>
      <button
  className={classNames.addButton}
  style={{ backgroundColor: '#007bff', color: '#fff' }}
  onClick={handleAddTeacherClick}
>
  Add Teacher
</button>

      {isAddTeacherOpen && <AddTeacher onAddTeacher={handleAddTeacher} />}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Contact Information</TableCell>
              <TableCell>Subject Taught</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="tablebody">
            {teachers.map((teacher) => (
              <React.Fragment key={teacher.id}>
                {editingTeacher === teacher ? (
                  <EditTeacher
                    teacher={teacher}
                    onUpdateTeacher={handleUpdateTeacher}
                    onCancelEdit={handleCancelEdit}
                  />
                ) : (
                  <TableRow id="table-body">
                    <TableCell>{teacher.name}</TableCell>
                    <TableCell>{teacher.contact}</TableCell>
                    <TableCell>{teacher.subject}</TableCell>
                    <TableCell>
                      <Button
                        className={classNames.editButton}
                        onClick={() => handleEditTeacher(teacher)}
                      >
                        <Edit /> Edit
                      </Button>
                      <DeleteTeacher
                        onDeleteTeacher={handleDeleteTeacher}
                        teacherId={teacher.id}
                      />
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Teachers;
