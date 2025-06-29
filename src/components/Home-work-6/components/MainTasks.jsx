import style from "./appReduxTasks.module.scss"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filteringTask } from "../redux/filtersSlice";

const MainTasks = () => {
        const filter = useSelector(state => state.filter.status);
        const dispatch = useDispatch();
        const handleBtn = event => { const selected = event.target.name; dispatch(filteringTask(selected))}

        return (
                <div className={style.mainTasks}>
                        <button  type="button" name="all" onClick={handleBtn}  className={filter==="all"? style.selected : style.filtering}>All</button>
                        <button type="button" name="active" onClick={handleBtn} className={filter==="active"? style.selected : style.filtering}>Active</button>
                        <button type="button" name="completed" onClick={handleBtn} className={filter==="completed"? style.selected : style.filtering}>Completed</button>
                </div>
        )
}

export default MainTasks