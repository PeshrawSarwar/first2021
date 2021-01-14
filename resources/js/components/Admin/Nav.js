import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

class Navbar extends Component {
    logout(e) {
        e.preventDefault();
        localStorage.removeItem("adminsToken");
        this.props.history.push(`/login`);
    }
    render() {
        const Navbar = (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            data-widget="pushmenu"
                            to="#"
                            role="button"
                        >
                            <i className="fas fa-bars" />
                        </Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item d-none d-sm-inline-block">
                        <Link
                            to="/login"
                            className="nav-link"
                            onClick={this.logout.bind(this)}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
            // <nav className="navbar navbar-expand-lg navbar-light bg-light">
            //     <a className="navbar-brand" href="#">
            //         first2021
            //     </a>
            //     <button
            //         className="navbar-toggler"
            //         type="button"
            //         data-toggle="collapse"
            //         data-target="#navbarNav"
            //         aria-controls="navbarNav"
            //         aria-expanded="false"
            //         aria-label="Toggle navigation"
            //     >
            //         <span className="navbar-toggler-icon" />
            //     </button>
            //     <div className="collapse navbar-collapse" id="navbarNav">
            //         <ul className="navbar-nav">
            //             <li className="nav-item active">
            //                 <Link className="nav-link" to="/home">
            //                     Home <span className="sr-only">(current)</span>
            //                 </Link>
            //             </li>
            //             <li className="nav-item active">
            //                 <Link className="nav-link" to="/addItem">
            //                     Add Item{" "}
            //                     <span className="sr-only">(current)</span>
            //                 </Link>
            //             </li>
            //             <li className="nav-item">
            //                 <a
            //                     className="nav-link"
            //                     href="/login"
            //                     onClick={this.logout.bind(this)}
            //                 >
            //                     Logout
            //                 </a>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>
        );
        return (
            <div>
                {localStorage.adminsToken ? (
                    Navbar
                ) : (
                    <Redirect to="/login"> </Redirect>
                )}
            </div>
        );
    }
}

export default withRouter(Navbar);
