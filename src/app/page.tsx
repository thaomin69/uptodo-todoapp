"use client"

import styles from './page.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Index from '../pages/home'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Index />
      <Footer />
    </main>
  )
}