import React, {useState} from "react";
import './App.css';
import AdminConsole from "./Components/AdminConsole";
import Archive from "./Components/Archive";
import Login from "./Components/Login";
import Header from "./Components/Header";
import SecretStuff from "./Components/SecretStuff";
import MyNavBar from "./Components/MyNavBar";
import {Routes, Route, Navigate} from "react-router-dom";


function App() {
  const currentDate = new Date();
  const [isLoggedIn, setIsLoggedIn] = useState(false); //Added once the logged in page was completed with the prevValue modificaions

  function updateLogState(){
    setIsLoggedIn(!isLoggedIn);
  }

  function CheckLogStatus(props){
    return isLoggedIn ? <props.component/> : <Navigate to='/'/>;
  }


  return (
    <div className="App">
        <Header/>
        <MyNavBar/>
      <Routes>
        <Route path="/" element={ isLoggedIn ? (<Navigate to='/admin'/>) : (<Login listener={updateLogState}/>)}/>
        <Route path="/admin" element={<CheckLogStatus component={AdminConsole}/>}/>
        <Route path="/archive" element={<CheckLogStatus component={AdminConsole}/>}/>
        <Route path="/secret" element={<CheckLogStatus component={AdminConsole}/>}/>
      </Routes>
        <p className='footer'> Copyright {currentDate.getFullYear()}</p>
    </div>
  );
}

export default App;
