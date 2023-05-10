import { useState } from 'react'
import styles from './header.module.css'
import { BsFillPatchPlusFill } from 'react-icons/bs'

export function Header({ onAddTask }) {

  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <h1>To do:</h1>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder='Add a new task' type='text' required value={title} onChange={onChangeTitle} />
        <button>Add
          <BsFillPatchPlusFill size={20} />
        </button>
      </form>
    </header>
  )
}