import React, { Component, useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import { auth } from './components/firebase/firebase.utils';

import { Lucas } from "./components/lucas/lucas";
import MeetTasker from "./components/MeetTasker";
import { ThingsToKnow } from './components/ThingsToKnow/ThingsToKnow';
import { Articles } from './components/Articles/Articles';
import { TopCategories } from './components/TopCategories/TopCategories'
import { Footer } from './components/Footer/Footer'
import Post from './components/Post';
import BrowseTask from './BrowseTask';
import Signup from './components/LoginAndLogout/Signup';
import Login from './components/LoginAndLogout/Login';


import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    email: '',
  });

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (!user) {
        setCurrentUser({
          email: '',
        });
      }
      setCurrentUser({
        email: user.email,
      });
      console.log(currentUser);
    })
  }

  useEffect(() => {
    authListener();
  }, []);

  const userEmail = currentUser.email;

  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/browse" component={BrowseTask} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={Signup} />
        </Switch>
      </div>
  );
}

// class App extends Component {

  
//   render() {

//     return (
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={MainPage} />
//           <Route exact path="/post" component={Post} />
//           <Route exact path="/browse" component={BrowseTask} />
//           <Route exact path="/login" component={} />
//           <Route exact path="/signup" component={} />
//         </Switch>
//       </div>
//     );
//   }
// }

function MainPage() {
  return (
    <React.Fragment>
      <Lucas />
      <MeetTasker />
      <ThingsToKnow />
      <Articles />
      <TopCategories />
      <Footer />
    </React.Fragment>
  )
}

export default App;
