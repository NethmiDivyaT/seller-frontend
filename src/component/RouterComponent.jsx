import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListItemComponent from "./user/ListItemComponent";
import AddItemComponent from "./user/AddItemComponent";
import EditItemComponent from "./user/EditItemComponent";
import React from "react";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                <Switch>
                    <Route path="/" exact component={ListItemComponent} />
                    <Route path="/users" component={ListItemComponent} />
                    <Route path="/add-user" component={AddItemComponent} />
                    <Route path="/edit-user" component={EditItemComponent} />
                </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;