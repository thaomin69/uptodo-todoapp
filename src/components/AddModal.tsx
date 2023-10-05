import React, { useState } from "react";
import styles from "../styles/AddModal.module.scss";

interface AddTaskModalProps {
  onAdd: (title: string) => void;
  onCancel: () => void;
}

export const AddModal: React.FC<AddTaskModalProps> = ({ onAdd, onCancel }) => {
  const [taskTitle, setTaskTitle] = useState("");

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add Task</h2>
        <hr className={styles.divider} />
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter new task"
        />
        <div className={styles.addAction}>
          <button
            onClick={onCancel}
            style={{ background: "#363636", color: "#8687e7" }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onAdd(taskTitle); // Gọi hàm onAdd với title đã nhập
              setTaskTitle(""); // Xóa nội dung input sau khi thêm task
            }}
            style={{ background: "#8687e7", color: "#fff" }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
