import React, { useState } from "react";

function EditTeacher({ teacher, onUpdateTeacher, onCancelEdit }) {
  const [editedTeacher, setEditedTeacher] = useState({ ...teacher });

  const handleSaveClick = () => {
    onUpdateTeacher(editedTeacher);
  };

  const handleCancelClick = () => {
    onCancelEdit();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTeacher({
      ...editedTeacher,
      [name]: value
    });
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          value={editedTeacher.name}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="contact"
          value={editedTeacher.contact}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="subject"
          value={editedTeacher.subject}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
}

export default EditTeacher;
