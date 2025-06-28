import Counter from "./Home-work-6/components/Counter"
import MainTasks from "./Home-work-6/components/MainTasks"
import style from "./Home-work-6/components/appReduxTasks.module.scss"

const AppReduxTasks = () => {

        return (<div className={style.appReduxTasks}>
                <section className={style.headerTasksApp}>
                <Counter />
                <MainTasks/>
                </section>

        </div>)
}

export default AppReduxTasks