

import { createContext, useContext, useState } from "react";
import { PreferenciesSection, PreviousValueTracker } from "./test/Test2";
import FunFeedback from "./home-work-4/FuncFeedback";


const UserContext = createContext();
export const useUserContect = () => useContext(UserContext);


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
        <FunFeedback/>
      <hr />
      <br />
        <PreviousValueTracker />
        <hr />
        <br />
        <UserProfile>
          <PreferenciesSection/>
        </UserProfile>

      


      </div>
    </>
  );
}
export default App;

const UserProfile = ({ children }) => {
  const [nameUser, setNameUser] = useState("")

  const ana = (e) => setNameUser("Ana");
  const flori = (e) => setNameUser("Flori")

  return (<UserContext.Provider value={{ana, flori, nameUser}}>
    {children}
    </UserContext.Provider>)

}
