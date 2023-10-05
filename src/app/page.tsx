"use client"

import { useState } from 'react'
import styles from './page.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Index from '../pages/home'
import { AddModal } from '../components/AddModal'

export default function Home() {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsAddTaskModalOpen(false);
  };
  
  return (
    <main className={styles.main}>
      <Header />
      {/* <Index /> */}
      <Index onAddModalClose={() => setIsAddTaskModalOpen(false)} />
      {/* {isAddTaskModalOpen && (
        <AddModal
          onAdd={(title) => {
            // TODO: Handle add new task here if needed
            setIsAddTaskModalOpen(false);
          }}
          onCancel={() => setIsAddTaskModalOpen(false)}
        />
      )} */}
      <Footer onAddClick={() => setIsAddTaskModalOpen(true)} />
    </main>
  );
}