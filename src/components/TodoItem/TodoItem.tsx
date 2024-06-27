'use client';
import React, { useState, useEffect } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, moveTodo }:any) => {
  const { id, title, description, status } = todo;
  const [dueTime, setDueTime] = useState<any>(null);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (dueTime && moment().isAfter(dueTime)) {
      alert(`Task "${title}" is overdue!`);
    }
  }, [dueTime]);

  const handleContextMenu = (event:any) => {
    event.preventDefault();
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
    setContextMenuVisible(true);
  };

  const closeContextMenu = () => {
    setContextMenuVisible(false);
  };

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'New':
        return 'blue';
      case 'Ongoing':
        return 'orange';
      case 'Done':
        return 'green';
      default:
        return 'gray';
    }
  };

  const moveTodoHandler = (newStatus:string) => {
    moveTodo(id, newStatus);
    closeContextMenu();
  };

  return (
    <div
      className={styles.item}
      style={{ borderColor: getStatusColor(status) }}
      onContextMenu={handleContextMenu}
    >
      <h3>Title: {title}</h3>
      <p>Description: {description}</p>
      {status === 'Ongoing' && (
        <div>
          <p>Due Time:</p>
          <Datetime onChange={setDueTime} value={dueTime} />
        </div>
      )}
      <span className={styles.status} style={{ backgroundColor: getStatusColor(status) }}>
        {status}
      </span>

      {contextMenuVisible && (
        <div className={styles.contextMenu} style={{display:"flex",gap:"5px",marginTop:"0px" }}>
          {status !== 'New' && (
            <button className={styles.contextMenuItem} onClick={() => moveTodoHandler('New')}>
              Move to New
            </button>
          )}
          {status !== 'Ongoing' && (
            <button className={styles.contextMenuItem} onClick={() => moveTodoHandler('Ongoing')}>
              Move to Ongoing
            </button>
          )}
          {status !== 'Done' && (
            <button className={styles.contextMenuItem} onClick={() => moveTodoHandler('Done')}>
              Move to Done
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoItem;
