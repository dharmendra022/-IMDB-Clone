import React from 'react';
import Menu from "./Menu";
import Popular from "./Popular";
import Trending from "./Trending";
import Newest from "./Newest";
import Rated from "./Rated";
import {Switch,Route,Redirect } from 'react-router-dom';

const App=()=> {
    return (
      <>
       <Menu/>
        <Switch>
        <Route exact path="/" component={Popular}></Route>
        <Route exact path="/trending" component={Trending}></Route>
        <Route exact path="/newest" component={Newest}></Route>
        <Route exact path="/rated" component={Rated}></Route>
        <Redirect exact path="/"></Redirect>

        </Switch>
      </>
    )
}

export default App;
