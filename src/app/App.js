import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NotFound from "./components/notFound";

function App() {
    return <div>
        <NavBar/>
        <Switch>
            <Route path={"/login"} component={Login} />
            <Route path={"/users/:userId?"} component={Users} />
            <Route exact path={"/"} component={Main} />
            <Route path={"/404"} component={NotFound} />
            <Redirect to={"/404"} component={NotFound} />
        </Switch>
    </div>;
};

export default App;
