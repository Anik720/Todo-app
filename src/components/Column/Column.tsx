"use client";
import React, { useState } from "react";
import styles from "./Column.module.css";
import TodoItem from "../TodoItem/TodoItem";
import Modal from "./Modal/Modal";
import { FaPlus } from "react-icons/fa";


const Column = ({ title, todos, addTodo, moveTodo }: any) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddTodo = (title: string, description: string) => {
    if (title && description) addTodo(title, description);
    setShowModal(false);
  };

  return (
    <div className={styles.column}>
      <h2 style={{fontSize:"20px",fontWeight:"bold",color:"white"}}>{title}</h2>

      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} moveTodo={moveTodo} />
      ))}

      {title === "New" && (
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setShowModal(true)}
            className={styles.addButton}
          >
          <span> <FaPlus style={{display:"inline", paddingRight:"5px"}}/> Add Task</span> 
          </button>
        </div>
      )}

      <Modal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleAddTodo}
      />
    </div>
  );
};

export default Column;
