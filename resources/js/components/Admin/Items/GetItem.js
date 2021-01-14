import React, { Component } from "react";
import { getitems, handlePage } from "./function";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";

class GetItem extends Component {
    state = {
        items: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    };

    componentDidMount() {
        getitems().then(res => {
            this.setState({
                items: res.data.data,
                activePage: res.data.current_page,
                itemsCountPerPage: res.data.per_page,
                totalItemsCount: res.data.total
            });
        });
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        handlePage(pageNumber).then(res => {
            this.setState({
                items: res.data.data,
                activePage: res.data.current_page,
                itemsCountPerPage: res.data.per_page,
                totalItemsCount: res.data.total
            });
        });
    }
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Products</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <table className="table table-striped">
                                        <thead className="bg-info">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Barcode</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Control</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.items.map(item => {
                                                return (
                                                    <tr key={item.id}>
                                                        <th scope="row">
                                                            {item.name}
                                                        </th>
                                                        <td>
                                                            {item.description}
                                                        </td>
                                                        <td>
                                                            <img
                                                                src={
                                                                    item.image_url
                                                                }
                                                                alt="none"
                                                                width="80"
                                                                height="60"
                                                            />
                                                        </td>

                                                        <td>{item.barcode}</td>

                                                        <td>{item.price}</td>

                                                        <td>{item.quantity}</td>

                                                        <td>
                                                            {item.status ==
                                                            1 ? (
                                                                <span>new</span>
                                                            ) : null}
                                                            {item.status ==
                                                            2 ? (
                                                                <span>
                                                                    used
                                                                </span>
                                                            ) : null}
                                                        </td>

                                                        <td>
                                                            <Link
                                                                className="btn btn-info"
                                                                to={
                                                                    "/edit/item/" +
                                                                    item.id
                                                                }
                                                            >
                                                                edit item
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-center">
                                        <Pagination
                                            activePage={this.state.activePage}
                                            itemsCountPerPage={
                                                this.state.itemsCountPerPage
                                            }
                                            totalItemsCount={
                                                this.state.totalItemsCount
                                            }
                                            pageRangeDisplayed={3}
                                            onChange={this.handlePageChange.bind(
                                                this
                                            )}
                                            itemClass="page-item"
                                            linkClass="page-link"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default GetItem;
