import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import Task from '../components/Task';
import axios from 'axios';
import DeleteModalProps from '../components/DeleteModal';

// Define a type for tasks
interface TaskType {
  id: number;
  todo: string;
  completed: boolean;
}

export default function Index() {
  // Khai báo trạng thái và danh sách tasks
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);
  const [incompleteTasks, setIncompleteTasks] = useState<TaskType[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  useEffect(() => {
    // Gọi API để lấy danh sách tasks
    axios
      .get("https://dummyjson.com/todos/user/1")
      .then((response) => {
        const allTasks: TaskType[] = response.data.todos || [];
        // Phân chia tasks thành hoàn thành và chưa hoàn thành
        const completed = allTasks.filter((task) => task.completed);
        const incomplete = allTasks.filter((task) => !task.completed);
        setCompletedTasks(completed);
        setIncompleteTasks(incomplete);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures the API call only happens once on component mount


  const handleDeleteTask = (taskId: number) => {
    // Xóa task từ state (hoặc bạn có thể gọi API lần nữa để cập nhật danh sách tasks)
    setTasks(tasks.filter((task) => task.id !== taskId));
    setShowModal(false); // Đóng modal
  };

  return (
    <div className={styles.home}>
      <div className={styles.tasks}>
        {/* Hiển thị danh sách tasks chưa hoàn thành */}
        <div className={styles.taskSection}>
          <div className={styles.tags}>
            <div className={styles.tag}>
              <span>Today</span>
              <Image
                src="/icon/arrow-down.svg"
                alt="arrow-down"
                width={16}
                height={16}
              />
            </div>
          </div>
          {incompleteTasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.todo}
              time="10:00 AM"
              completed={false}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>

        {/* Hiển thị danh sách tasks hoàn thành */}
        <div className={styles.taskSection}>
          <div className={styles.tags}>
            <div className={styles.tag}>
              <span>Completed</span>
              <Image
                src="/icon/arrow-down.svg"
                alt="arrow-down"
                width={16}
                height={16}
              />
            </div>
          </div>
          {completedTasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.todo}
              time="10:00 AM"
              completed={true}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>

        {showModal && selectedTask && (
          <DeleteModalProps
            taskTitle={selectedTask.todo}
            taskId={selectedTask.id} // Giả định task có thuộc tính 'id'
            onDelete={() => handleDeleteTask(selectedTask.id)}
            onCancel={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}