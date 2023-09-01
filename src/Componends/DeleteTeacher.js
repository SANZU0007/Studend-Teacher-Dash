import React from "react";
import "../Style/Delete.css"




function DeleteTeacher({ teacherId, onDeleteTeacher }) {
  const handleDeleteClick = () => {
    onDeleteTeacher(teacherId);
  };

  return (
    <tr>
    
      <td>
        <button onClick={handleDeleteClick}>Delete</button>
      </td>
    </tr>
  );
}

export default DeleteTeacher;
