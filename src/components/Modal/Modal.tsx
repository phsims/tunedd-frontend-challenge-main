import React, { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <>
      <div className={styles["backdrop"]}></div>
      <div className={styles["modal"]}>
        <div className={styles["modal-content"]}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
