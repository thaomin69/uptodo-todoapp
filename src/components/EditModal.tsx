
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/EditModal.module.scss';
import axios from 'axios';

interface EditModalProps {
  taskTitle: string;
  taskId: number;
  onEdit: (newTitle: string) => void;
  onCancel: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  taskTitle,
  taskId,
  onEdit,
  onCancel,
}) => {
  const [newTitle, setNewTitle] = useState(taskTitle);

  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `https://dummyjson.com/todos/${taskId}`,
        {
          todo: newTitle,
        }
      );
      if (response.data) {
        onEdit(newTitle); // Gọi hàm onEdit với title mới
        handleCloseModal();
      }
    } catch (error) {
      console.error("Failed to edit the task", error);
    }
  };

  const handleCloseModal = () => {
    onCancel();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Edit Task Title</h2>
        <hr className={styles.divider} />
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <div className={styles.editAction}>
          <button onClick={handleCloseModal}>Cancel</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;