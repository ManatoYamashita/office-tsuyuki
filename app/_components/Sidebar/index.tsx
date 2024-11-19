'use client';

import { useState } from "react";
import styles from "./index.module.scss";

export default function Sidebar() {
  const [isShrinkView, setIsShrinkView] = useState(false);

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  return (
    <div className={`${styles["sidebar-container"]}${isShrinkView ? ` ${styles.shrink}` : ""}`}>
      <button
        className={styles["sidebar-viewButton"]}
        type="button"
        aria-label={isShrinkView ? "Expand Sidebar" : "Shrink Sidebar"}
        title={isShrinkView ? "Expand" : "Shrink"}
        onClick={handleSidebarView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${styles.feather} ${styles["feather-chevron-left"]}`}
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <div className={styles["sidebar-wrapper"]}>
        <div className={styles["sidebar-themeContainer"]}>
          <label
            htmlFor="theme-toggle"
            className={styles["sidebar-themeLabel"]}
          >
            <input
              className={styles["sidebar-themeInput"]}
              type="checkbox"
              id="theme-toggle"
            //   onChange={handleThemeChange}
            />
            <div className={`${styles["sidebar-themeType"]} ${styles.light}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles["sidebar-listIcon"]}
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              <span className={styles["sidebar-themeInputText"]}>Light</span>
            </div>
            <div className={`${styles["sidebar-themeType"]} ${styles.dark}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles["sidebar-listIcon"]}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <span className={styles["sidebar-themeInputText"]}>Dark</span>
            </div>
          </label>
        </div>
        <ul className={styles["sidebar-list"]}>
          <li className={`${styles["sidebar-listItem"]} ${styles.active}`}>
            <a className={styles.anchorlink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles["sidebar-listIcon"]}
              >
                <rect x="3" y="3" rx="2" ry="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className={`${styles["sidebar-listItemText"]} ${styles.span}`}>Dashboard</span>
            </a>
          </li>
          <li className={styles["sidebar-listItem"]}>
            <a className={styles.anchorlink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles["sidebar-listIcon"]}
              >
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              </svg>
              <span className={`${styles["sidebar-listItemText"]} ${styles.span}`}>Inbox</span>
            </a>
          </li>
          <li className={styles["sidebar-listItem"]}>
            <a className={styles.anchorlink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles["sidebar-listIcon"]}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className={`${styles["sidebar-listItemText"]} ${styles.span}`}>Calendar</span>
            </a>
          </li>
          <li className={styles["sidebar-listItem"]}>
            <a className={styles.anchorlink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles["sidebar-listIcon"]}
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              <span className={`${styles["sidebar-listItemText"]} ${styles.span}`}>Activity</span>
            </a>
          </li>
          <li className={styles["sidebar-listItem"]}>
            <a className={styles.anchorlink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles["sidebar-listIcon"]}
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className={`${styles["sidebar-listItemText"]} ${styles.span}`}>Settings</span>
            </a>
          </li>
        </ul>
        <div className={styles["sidebar-profileSection"]}>
          <img
            src="https://assets.codepen.io/3306515/i-know.jpg"
            width="40"
            height="40"
            alt="Monica Geller"
          />
          <span className={styles.span}>Monica Geller</span>
        </div>
      </div>
    </div>
  );
}
