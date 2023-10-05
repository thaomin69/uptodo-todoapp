import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
// import AddModal from "./AddModal";
import { AddModal } from "./AddModal";

interface FooterProps {
  onAddClick: () => void;
}

export default function Footer({ onAddClick }: { onAddClick: () => void }) {
  
  return (
    <footer className={styles.footer}>
      {/* BEGIN: Icon left */}
      <div className={styles.iconsLeft}>
        <div className={styles.icon}>
          <Image src="/icon/index.svg" alt="Index" width={24} height={24} />
          <p>Index</p>
        </div>
        <div className={styles.icon}>
          <Image
            src="/icon/calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
          />
          <p>Calendar</p>
        </div>
      </div>
      {/* END: Icon left */}

      {/* BEGIN: Add button */}
      <div className={styles.addButton} onClick={onAddClick}>
        <Image src="/icon/add.svg" alt="add button" width={40} height={40} />
      </div>

      {/* END: Add button */}

      {/* BEGIN: Icon right */}
      <div className={styles.iconsRight}>
        <div className={styles.icon}>
          <Image src="/icon/clock.svg" alt="Focus" width={24} height={24} />
          <p>Focuse</p>
        </div>
        <div className={styles.icon}>
          <Image src="/icon/user.svg" alt="Profile" width={24} height={24} />
          <p>Profile</p>
        </div>
      </div>
      {/* END: Icon right */}
    </footer>
  );
}
