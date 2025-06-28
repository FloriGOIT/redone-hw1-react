import { Provider } from 'react-redux';
import AppReduxTasks from './AppReduxTasks';
import store from './Home-work-6/redux/store';

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
        <Provider store={store}>
          <AppReduxTasks />
        </Provider>
      </div>
    </>
  );
}
export default App;
