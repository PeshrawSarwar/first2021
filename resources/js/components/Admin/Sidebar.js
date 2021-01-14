import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
class Sidebar extends Component {
    render() {
        const sidebar = (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <Link to="/" className="brand-link">
                        <img
                            src={require("./admin.png")}
                            alt="AdminLTE Logo"
                            className="brand-image img-circle elevation-3"
                            style={{ opacity: ".8" }}
                        />
                        <span className="brand-text font-weight-light">
                            Admin
                        </span>
                    </Link>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image"></div>
                            <div className="info">
                                <a href="#" className="d-block">
                                    Alexander Pierce
                                </a>
                            </div>
                        </div>

                        <div className="form-inline">
                            <div
                                className="input-group"
                                data-widget="sidebar-search"
                            >
                                <input
                                    className="form-control form-control-sidebar"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                <li className="nav-item menu-open">
                                    <Link to="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                <i className="fas fa-house-user nav-icon"></i>
                                                <p>Home</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to="/pos"
                                                className="nav-link"
                                            >
                                                <i className="fas fa-cart-plus nav-icon"></i>
                                                <p>POS</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item menu-open">
                                            <Link
                                                to="/product"
                                                className="nav-link"
                                            >
                                                <i className="fas fa-boxes nav-icon"></i>
                                                <p>Items</p>
                                                <i className="right fas fa-angle-left" />
                                            </Link>

                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <Link
                                                        to="/addItem"
                                                        className="nav-link"
                                                    >
                                                        <i className="fas fa-users nav-icon"></i>
                                                        <p>Add Item</p>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        to="/getItem"
                                                        className="nav-link"
                                                    >
                                                        <i className="fas fa-users nav-icon"></i>
                                                        <p>Get Item</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to="/user"
                                                className="nav-link"
                                            >
                                                <i className="fas fa-users nav-icon"></i>
                                                <p>Users</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item menu-open">
                                            <Link
                                                to="/order"
                                                className="nav-link"
                                            >
                                                <i className="fas fa-money-bill-wave nav-icon"></i>
                                                <p>Orders</p>
                                                <i className="right fas fa-angle-left" />
                                            </Link>

                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <Link
                                                        to="/addOrder"
                                                        className="nav-link"
                                                    >
                                                        <i className="fas fa-users nav-icon"></i>
                                                        <p>Add Orders</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        );
        return (
            <div>
                {localStorage.adminsToken ? (
                    sidebar
                ) : (
                    <Redirect to="/login"> </Redirect>
                )}
            </div>
        );
    }
}

export default withRouter(Sidebar);
