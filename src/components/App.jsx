import { Provider } from 'react-redux';
import AppReduxTasks from './AppReduxTasks';
import store from './Home-work-6/AppReduxTasks/redux/store';
import AppReduxAgenda from './AppReduxAgenda';
import storeAgenda from './Home-work-6/AppReduxAgenda/redux/store';

function App() {
  return (
    <>
      <h1>React homework redone</h1>
      <div
        style={{
          borderWidth: 3,
          borderColor: 'brown',
          borderStyle: 'solid',
          padding: 15,
        }}
      >
        <Provider store={storeAgenda}>
          <AppReduxAgenda />
        </Provider>

        <br />
        <br />
        <Provider store={store}>
          <AppReduxTasks />
        </Provider>
      </div>
    </>
  );
}
export default App;
