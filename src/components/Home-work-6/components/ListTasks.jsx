import { useSelector,useDispatch } from "react-redux";
import style from "./appReduxTasks.module.scss"
import { deleteTask, toggleTask } from "../redux/tasksSlices";


const ListTasks = () => {
        const tasks = useSelector(state => state.tasks)
        const filter = useSelector(state => state.filter.status)

        const dispatch = useDispatch();
        const activeL = tasks.filter(task => !task.completed)
        const completedL = tasks.filter(task => task.completed)
        let finalList = [];
        if (filter === "all") {  finalList = tasks };
        if (filter === "active") {  finalList = activeL; }
        if (filter === "completed"){ finalList = completedL};


        return (<ul className={style.listTasks}>
                <br/>
                {finalList.map((task, index) => <li key={task.id}>
                        <div className={style.textTask}>
                                <label htmlFor="text">{index + 1}. {task.text}</label>
                                <input id="text" type="checkBox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} style={{ width: "20px", height:"20px"}}/>
                        </div>
                        
                        <button type="button" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                        
                </li>)}
 
        </ul>)
}

export default ListTasks