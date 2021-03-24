import React from 'react';
import {Router} from '@reach/router';
// import Header from "./components/Header";
import OneSkiff from "./components/OneSkiff";
import EditSkiff from "./components/EditSkiff";
import NewSkiff from "./components/NewSkiff";
import AllSkiffs from "./components/AllSkiffs";
import Header from "./components/Header";
import './App.css';

function App() {
  const NotFound =() => {
    return (
      <div>Rout not Found</div>
    )
  };
  return (
    <div className="App">

    <Header />
      <Router>
      <AllSkiffs path = "/skiffs" />
      <NewSkiff  path = "/skiff/new" />
      <OneSkiff  path = "/skiff/:id"/>
      <EditSkiff path = "skiff/:id/edit" />
      <NotFound default />
      </Router>
    </div>
  );
}

export default App;
