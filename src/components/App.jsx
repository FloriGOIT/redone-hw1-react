import Profile from './home-work-1/Profile/Profile';
import user from './home-work-1/Profile/user.json';
import me from '../components/home-work-1/Profile/WhatsApp Image 2025-06-01 at 20.27.49.jpeg';

import Stats from './home-work-1/Stats/Stats';
import statistics from "./home-work-1/Stats/statistics.json";

import FriendList from './home-work-1/FriendsProfile/FriendsList';
import friends from "./home-work-1/FriendsProfile/friends.json";

import Transactions from './home-work-1/MyBankAccount/Transactions.jsx';
import data from "./home-work-1/MyBankAccount/transactions.json"

import Feedback from './home-work-2/Feedback/Feedback'; 

import CarTest from './test/Test';
import SignUpForm from './test/Test1';
import { useState } from 'react';


function App() {
  const { username, tag, location, stats } = user;
  const[dataForm, setDataForm] = useState("")
  const handleData = value => { setDataForm(value);  console.log("dataForm",dataForm)}
  return (
    <>
      <h1>React homework redone</h1>
      <div style={{borderWidth: 3, borderColor:'brown', borderStyle:'solid', padding: 15}}>
      <Feedback />
      <hr /><hr /><br />      
      <div><b style={{fontWeight:800, fontSize:18, color:'brown'}}>TEST</b>
      <p>Form values are: {dataForm}</p>
      <SignUpForm onSubmit={handleData} />
      </div>
      <hr/><hr/><br/>
      <CarTest owner="Alice" />
      <CarTest owner="Dana" />
      <CarTest owner="Flori" />
      <hr/><br/>
      <Profile
        username={username}
        tag={tag}
        me={me}
        location={location}
        stats={stats}
      />
      <hr/><br/>
      <Stats stats={statistics} />
      <hr /><br />
      <FriendList friendsList={friends} />
      <hr /><br />
      <Transactions data={data} />
      </div>
      
    </>
  );
}
export default App;
