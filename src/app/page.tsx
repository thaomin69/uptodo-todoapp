"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Index from "../pages/home";
import { AddModal } from "../components/AddModal";
import axios from "axios";

// Define a type for tasks
export interface TaskType {
  id: number;
  todo: string;
  completed: boolean;
}

export default function Home() {
  const handleModalClose = () => {
    setIsAddTaskModalOpen(false);
  };

  const handleAddNewTask = (title: string) => {
    axios
      .post("https://dummyjson.com/todos/add", {
        todo: title,
        completed: false,
        userId: 1,
      })
      .then((response) => {
        console.log(response);

        axios
          .get("https://dummyjson.com/todos/user/1?limit=10")
          .then((response2) => {
            console.log("kết quả sau khi adđ ", response2);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
        setIsAddTaskModalOpen(false);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsAddTaskModalOpen(true);
  };

  return (
    <main className={styles.main}>
      <Header />
      {/* <Index /> */}
      <Index onAddModalClose={() => setIsAddTaskModalOpen(false)} />
      {isAddTaskModalOpen && (
        <AddModal
          onAdd={(title) => {
            console.log(title);

            handleAddNewTask(title);
            setIsAddTaskModalOpen(false);
          }}
          onCancel={() => setIsAddTaskModalOpen(false)}
        />
      )}
      <Footer onAddClick={() => setIsAddTaskModalOpen(true)} />
    </main>
  );
}
