import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Task.module.scss';
import DeleteModal from './DeleteModal';

interface TaskProps {
  id: number; // Thêm ID để xác định task cần xóa
  title: string;
  time: string;
  completed: boolean; // Thêm thuộc tính trạng thái hoàn thành
  onDelete: (id: number) => void; // Hàm xóa task
}

const Task: React.FC<TaskProps> = ({ id, title, time, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    document.body.classList.add("no-scroll");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    document.body.classList.remove("no-scroll");
    setIsModalOpen(false);
  };

  return (
    <div className={styles.task}>
      <Image
        src="/icon/circle.svg"
        alt="circle icon"
        width={16}
        height={16}
        className={styles.iconCheck}
      />
      <div className={styles.taskDetails}>
        <p className={styles.title}>{title}</p>
        <p className={styles.time}>{time}</p>
      </div>
      <div className={styles.taskActions}>
        <Image
          src="/icon/edit.svg"
          alt="edit icon"
          width={24}
          height={24}
          className={styles.editAction}
        />

        {isModalOpen && (
          <DeleteModal
            taskId={id}
            taskTitle={title}
            onCancel={handleCloseModal}
            onDelete={() => {
              onDelete(id);
              handleCloseModal();
            }}
          />
        )}

        <Image
          src="/icon/delete.svg"
          alt="delete icon"
          width={24}
          height={24}
          className={styles.deleteAction}
          onClick={handleOpenModal}
        />
      </div>
    </div>
  );
};

export default Task;