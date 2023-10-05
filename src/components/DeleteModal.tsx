import React from 'react';
import Image from 'next/image';
import styles from '../styles/DeleteModal.module.scss';
import axios from 'axios';

interface DeleteModalProps {
  taskTitle: string;
  taskId: number;   
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteModalProps: React.FC<DeleteModalProps> = ({
  taskTitle,
  taskId,
  onDelete,
  onCancel,
}) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://dummyjson.com/todos/${taskId}`
      );
      if (response.data && response.data.isDeleted) {
        onDelete(); // Gọi hàm onDelete từ props để cập nhật giao diện (hoặc làm bất cứ điều gì bạn muốn sau khi xóa thành công)
      }
    } catch (error) {
      console.error("Failed to delete the task", error);
    }
  };

  const handleCancel = async () => {
    onCancel();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.titleModal}>Delete Task</h2>
        <Image
          src="/icon/divider.svg"
          alt="divider"
          width={24}
          height={24}
          className={styles.divider}
        />
        <div className={styles.wrapper}>
          <p>Are You sure you want to delete this task?</p>
          <p>Task title: {taskTitle}</p>
        </div>

        <div className={styles.deleteAction}>
          <button onClick={handleCancel}>Cancel</button>
          <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalProps;