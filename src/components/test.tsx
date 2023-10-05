import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Task.module.scss";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

interface TaskProps {
  id: number; // Thêm ID để xác định task cần xóa
  title: string;
  time: string;
  completed: boolean; // Thêm thuộc tính trạng thái hoàn thành
  onDelete: (id: number) => void; // Hàm xóa task
}

const Task: React.FC<TaskProps> = ({ id, title, time, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleToggleModal = (modalType: "delete" | "edit") => {
    document.body.classList.toggle("no-scroll");
    if (modalType === "delete") {
      setIsModalOpen(!isModalOpen);
    } else if (modalType === "edit") {
      setIsEditModalOpen(!isEditModalOpen);
    }
  };

  const handleEditTask = (newTitle: string) => {
    // TODO: Bạn có thể cập nhật tiêu đề công việc ở đây nếu cần.
    handleToggleModal("edit");
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
          onClick={() => handleToggleModal("edit")}
        />

        {isEditModalOpen && (
          <EditModal
            taskId={id}
            taskTitle={title}
            onCancel={() => handleToggleModal("edit")}
            onEdit={handleEditTask}
          />
        )}

        {isModalOpen && (
          <DeleteModal
            taskId={id}
            taskTitle={title}
            onCancel={() => handleToggleModal("delete")}
            onDelete={() => {
              onDelete(id);
              handleToggleModal("delete");
            }}
          />
        )}

        <Image
          src="/icon/delete.svg"
          alt="delete icon"
          width={24}
          height={24}
          className={styles.deleteAction}
          onClick={() => handleToggleModal("delete")}
        />
      </div>
    </div>
  );
};

export default Task;
