import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <NavBar state={props.appState.SideBar}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.appState.ProfilePage} addPost={props.addPost} />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.appState.DialogsPage} />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
  );
}

export default App;
