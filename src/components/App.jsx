import Profile from './Profile/Profile';
import user from './Profile/user.json';
import me from './Profile/WhatsApp Image 2025-06-01 at 20.27.49.jpeg';

import Stats from './Stats/Stats';
import statistics from "./Stats/statistics.json"


function App() {
  const { username, tag, location, stats } = user;

  return (
    <>
      <h1>Redone - hw1 - react</h1>
      <Profile
        username={username}
        tag={tag}
        me={me}
        location={location}
        stats={stats}
      />
      <hr/><br/>
      <Stats stats={statistics}/>

    </>
  );
}
export default App;
