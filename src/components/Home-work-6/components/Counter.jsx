import style from "./appReduxTasks.module.scss"
import { useSelector } from "react-redux";

const Counter = () => {

        const countTasks = useSelector(state => state.tasks.length)
        const countTasksactive = useSelector(state => {
                const activeTasks = state.tasks.filter(task => task.completed === true);
                return activeTasks.length
        })
        const countTasksInactive = countTasks - countTasksactive;

        return <div className={style.taskCounter}>
                <h3>Tasks: { countTasks}</h3>
                <span>Active: <b>{countTasksactive}</b></span><br/>
                <span>Completed: <b>{countTasksInactive}</b></span>
  </div>;
};

export default Counter;
