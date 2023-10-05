import React, { useState } from "react";
interface AddTaskModalProps {
  onAdd: (title: string) => void;
  onCancel: () => void;
}

export const AddModal: React.FC<AddTaskModalProps> = ({ onAdd, onCancel }) => {
  const [taskTitle, setTaskTitle] = useState("");

  return (
    <div>
      <h2>Add Task</h2>
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task title"
      />

      <button onClick={onCancel}>Cancel</button>
      {/* <button onClick={() => onAdd(taskTitle)}>Add</button> */}
      <button
        onClick={() => {
          onAdd(taskTitle); // Gọi hàm onAdd với title đã nhập
          setTaskTitle(""); // Xóa nội dung input sau khi thêm task
        }}
      >
        Add
      </button>
    </div>
  );
};