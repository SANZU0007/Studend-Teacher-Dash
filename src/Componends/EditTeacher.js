import React, { useState } from "react";
import "../Style/edit.css";

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
      [name]: value,
    });
  };

  return (
    <tr className="edit-teacher">
      <td>
        <input
          type="text"
          name="name"
          value={editedTeacher.name}
          onChange={handleInputChange}
          className="edit-input"
        />
      </td>
      <td>
        <input
          type="text"
          name="contact"
          value={editedTeacher.contact}
          onChange={handleInputChange}
          className="edit-input"
        />
      </td>
      <td>
        <input
          type="text"
          name="subject"
          value={editedTeacher.subject}
          onChange={handleInputChange}
          className="edit-input"
        />
      </td>
      <td className="edit-buttons">
        <button
          onClick={handleSaveClick}
          className="edit-button save-button"
        >
          Save
        </button>
        <button
          onClick={handleCancelClick}
          className="edit-button cancel-button"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}

export default EditTeacher;
