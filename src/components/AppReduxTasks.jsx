import Counter from './Home-work-6/AppReduxTasks/components/Counter';
import NavTasks from './Home-work-6/AppReduxTasks/components/NavTasks';
import style from './Home-work-6/AppReduxTasks/components/appReduxTasks.module.scss';
import AddTask from "./Home-work-6/AppReduxTasks/components/AddTask";
import ListTasks from "./Home-work-6/AppReduxTasks/components/ListTasks";

const AppReduxTasks = () => {
  return (
    <div className={style.appReduxTasks}>
      <section className={style.headerTasksApp}>
        <Counter />
        <NavTasks />
      </section>

                  <section className={style.tasks}>
                         
                          <AddTask />
                          <ListTasks/>
      </section>
    </div>
  );
};

export default AppReduxTasks;
