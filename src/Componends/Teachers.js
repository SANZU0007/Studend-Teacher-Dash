import React, { useState } from "react";
import EditTeacher from "./EditTeacher";
import DeleteTeacher from "./DeleteTeacher";
import AddTeacher from "./AddTeacher";
import "../Style/Teacher.css";

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
    <div className="teachers">
      <h2>Teacher List</h2>
      <button onClick={handleAddTeacherClick}>Add Teacher</button>
      {isAddTeacherOpen && <AddTeacher onAddTeacher={handleAddTeacher} />}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Information</th>
            <th>Subject Taught</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <React.Fragment key={teacher.id}>
              {editingTeacher === teacher ? (
                <EditTeacher
                  teacher={teacher}
                  onUpdateTeacher={handleUpdateTeacher}
                  onCancelEdit={handleCancelEdit}
                />
              ) : (
                <tr>
                  <td>{teacher.name}</td>
                  <td>{teacher.contact}</td>
                  <td>{teacher.subject}</td>
                  <td>
                    <button onClick={() => handleEditTeacher(teacher)}>
                      Edit
                    </button>
                    <DeleteTeacher
                      onDeleteTeacher={handleDeleteTeacher}
                      teacherId={teacher.id}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teachers;
