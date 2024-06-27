'use client';
import React, { useState } from 'react';
import styles from './KanbanBoard.module.css';
import Column from '../Column/Column';


const KanbanBoard = () => {
  const [todos, setTodos] = useState<any>([]);

  const addTodo = (title:string, description:string) => {
    setTodos([{ id: Date.now(), title, description, status: 'New' }, ...todos]);
  };

  const moveTodo = (id:any, newStatus:any) => {
    setTodos(todos.map((todo:any) => todo.id === id ? { ...todo, status: newStatus } : todo));
  };

  return (
    <div className={styles.board}>
      <Column title="New" todos={todos.filter((todo:any) => todo.status === 'New')} addTodo={addTodo} moveTodo={moveTodo} />
      <Column title="Ongoing" todos={todos.filter((todo:any) => todo.status === 'Ongoing')} moveTodo={moveTodo} />
      <Column title="Done" todos={todos.filter((todo:any) => todo.status === 'Done')} moveTodo={moveTodo} />
    </div>
  );
};

export default KanbanBoard;
