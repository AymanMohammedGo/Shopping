"use client";
import styles from "./Button.module.css";
const Button = () => {
  return (
    <button
      className={styles.logout}
      onClick={() => {
        console.log("logout");
      }}
    >
      Logout
    </button>
  );
};

export default Button;
