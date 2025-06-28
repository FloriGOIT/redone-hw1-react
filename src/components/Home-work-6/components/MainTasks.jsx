import style from "./appReduxTasks.module.scss"
import { useSelector } from "react-redux"

const MainTasks = () => {
        const currentFilter = "all";
        const filter = useSelector(state => state.filter.status)
        return (
                <div className={style.mainTasks}>
                        <button  type="button" name="active"  >Active</button>
                        <button  type="button" name="all"  >All</button>
                        <button type="button" name="completed">Completed</button>
                </div>
        )
}

export default MainTasks