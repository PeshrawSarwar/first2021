import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Siwtch, Route } from "react-router-dom";
import Navbar from "./Admin/Nav";
import Home from "./Admin/Home";
import Login from "./Admin/Login";
import addItem from "./Admin/Items/AddItem";
import Sidebar from "./Admin/Sidebar";
import getItem from "./Admin/Items/GetItem";
import editItem from "./Admin/Items/EditItem";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Navbar />
                    <Sidebar />

                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/addItem" component={addItem} />
                    <Route exact path="/getItem" component={getItem} />
                    <Route exact path="/edit/item/:id" component={editItem} />
                </div>
            </Router>
        );
    }
}

if (document.getElementById("App")) {
    ReactDOM.render(<App />, document.getElementById("App"));
}
