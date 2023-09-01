import React, { useState } from "react"
import "../Style/addteacher.css"


function AddTeacher({ onAddTeacher }) {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    contact: "",
    subject: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTeacher({
      ...newTeacher,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the input here if needed
    onAddTeacher(newTeacher);
    // Clear the form after adding a teacher
    setNewTeacher({
      name: "",
      contact: "",
      subject: "",
    });
  };

  return (
    <div className="add-teacher">
      <h2>Add Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newTeacher.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Information:</label>
          <input
            type="email"
            id="contact"
            name="contact"
            value={newTeacher.contact}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject Taught:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={newTeacher.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
}

export default AddTeacher;
