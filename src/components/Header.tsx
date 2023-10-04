import Image from 'next/image';
import React from 'react';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.icon}>
          <Image
            src="/icon/sort.svg"
            alt='icon sort'
            width={24}
            height={24}
            className={styles.sorticon}
          />
        </div>
        <div className={styles.text}>Index</div>
        <div className={styles.profile}>
          <Image
            className={styles.imgProfile}
            src="/img/avatar.png"
            alt='profile image'
            width={24}
            height={24}
          />
        </div>
      </header>
      <div className={styles.searchBar}>
        <Image
          src="/icon/search-normal.svg"
          alt="search icon"
          width={24}
          height={24}
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Search for your task..."
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}