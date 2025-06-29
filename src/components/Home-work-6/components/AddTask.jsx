import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTask } from '../redux/tasksSlices';
import style from "./appReduxTasks.module.scss"

const AddTask = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  console.log('tasks', tasks);
  const newItem = { id: nanoid(), text: '', completed: false };
  const handleNewTask = e => {
    e.preventDefault();
    const inputForm = e.currentTarget.elements.input.value;
    const itemToAdd = { ...newItem, text: inputForm }
    dispatch(addTask(itemToAdd));
    e.target.reset();
    localStorage.setItem("arrTasks", JSON.stringify([...tasks, itemToAdd]))
  };

  return (
    <>
      <br />
      <h3>Add a new task</h3>
      <form onSubmit={handleNewTask}>
        <input className={style.formInput} name="input" type="text" />
        <button type="submit" style={{ marginLeft: 15, color: 'blue' }}>
          Commit
        </button>
      </form>
    </>
  );
};

export default AddTask;
