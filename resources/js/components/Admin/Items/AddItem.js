import React, { Component } from "react";
import { additems } from "./function";


class AddItem extends Component {
    state = {
        name: "",
        description: "",
        image: "",
        barcode: "",
        price: "",
        quantity: "",
        status: "",

        nameRequired: "",
        descriptionRequired: "",
        imageRequired: "",
        barcodeRequired: "",
        priceRequired: "",
        quantityRequired: "",
        statusRequired: "",
        photoType: "",
        photoSize: ""
    };


    validateName = () => {
        let nameRequired = "";
        if (this.state.name.length < 4) {
            nameRequired = "you should enter at least 4 characters";
        }
        if (nameRequired) {
            this.setState({
                nameRequired
            });
        } else {
            this.setState({
                nameRequired: ""
            });
        }
    };

    changeState = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    changeStatePhoto = e => {
        this.setState({
            image: e.target.files[0]
        });
    };

    inputRef = React.createRef();

    submitState = e => {
        e.preventDefault();
        this.validateName();

        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("description", this.state.description);
        formData.append("image", this.state.image);
        formData.append("barcode", this.state.barcode);
        formData.append("price", this.state.price);
        formData.append("quantity", this.state.quantity);
        formData.append("status", this.state.status);

        additems(formData).then(res => {
            if (res) {
                this.inputRef.current.value = "";
                this.setState({
                    success: "you created item successfully",
                    name: "",
                    description: "",
                    status: "",
                    price: "",
                    barcode: "",
                    qunatity: ""
                });
            } else {
                this.setState({
                    success: "no"
                });
            }
        });
    };
    render() {
        const success = (
            <div className="alert alert-success"> {this.state.success} </div>
        );
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Add Products</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.success ? success : null}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* jquery validation */}
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                Add Products <small></small>
                                            </h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form
                                            id="quickForm"
                                            onSubmit={this.submitState}
                                        >
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputname1">
                                                        Product Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter product name"
                                                        className="form-control"
                                                        name="name"
                                                        value={this.state.name}
                                                        onChange={
                                                            this.changeState
                                                        }
                                                        required
                                                    />
                                                    <small
                                                        style={{ color: "red" }}
                                                    >
                                                        {
                                                            this.state
                                                                .nameRequired
                                                        }
                                                    </small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputdescription1">
                                                        Description
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputdescription1"
                                                        name="description"
                                                        value={
                                                            this.state
                                                                .description
                                                        }
                                                        onChange={
                                                            this.changeState
                                                        }
                                                        required
                                                        placeholder="Product Description"
                                                    />
                                                    <small
                                                        style={{ color: "red" }}
                                                    ></small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputdescription1">
                                                        Select an image
                                                    </label>
                                                    <input
                                                        ref={this.inputRef}
                                                        type="file"
                                                        className="form-control"
                                                        id="exampleInputdescription1"
                                                        name="image"
                                                        required
                                                        placeholder="Select an image"
                                                        onChange={
                                                            this
                                                                .changeStatePhoto
                                                        }
                                                    />
                                                    <small
                                                        style={{ color: "red" }}
                                                    ></small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputdescription1">
                                                        Barcode
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputdescription1"
                                                        placeholder="Barcode should be unique"
                                                        required
                                                        name="barcode"
                                                        value={
                                                            this.state.barcode
                                                        }
                                                        onChange={
                                                            this.changeState
                                                        }
                                                    />
                                                    <small
                                                        style={{ color: "red" }}
                                                    ></small>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputdescription1">
                                                        Price
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Price"
                                                        required
                                                        className="form-control"
                                                        id="exampleInputdescription1"
                                                        name="price"
                                                        value={this.state.price}
                                                        onChange={
                                                            this.changeState
                                                        }
                                                    />
                                                    <small
                                                        style={{ color: "red" }}
                                                    ></small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputdescription1">
                                                        Quantity
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Quantity"
                                                        required
                                                        className="form-control"
                                                        id="exampleInputdescription1"
                                                        name="quantity"
                                                        value={
                                                            this.state.quantity
                                                        }
                                                        onChange={
                                                            this.changeState
                                                        }
                                                    />
                                                    <small
                                                        style={{ color: "red" }}
                                                    ></small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputdescription1">
                                                        Ststus
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Status"
                                                        required
                                                        className="form-control"
                                                        id="exampleInputdescription1"
                                                        name="status"
                                                        value={
                                                            this.state.status
                                                        }
                                                        onChange={
                                                            this.changeState
                                                        }
                                                    />
                                                    <small
                                                        style={{ color: "red" }}
                                                    ></small>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    value="Add"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/*/.col (left) */}
                                {/* right column */}
                                <div className="col-md-6"></div>
                                {/*/.col (right) */}
                            </div>
                        </div>
                    </section>
                </div>
                {/* {this.state.success ? success : null}
                <div
                    className="card text-white bg-info mb-3 card_login "
                    style={{ maxWidth: "22rem" }}
                >
                    <div className="card-header">add item</div>
                    <div className="card-body ">
                        <form onSubmit={this.submitState}>

                            <div className="form-group">
                                <label htmlFor="exampleInputdescription1">
                                    price
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputdescription1"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.changeState}
                                />
                                <small style={{ color: "red" }}></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputdescription1">
                                    quantity
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputdescription1"
                                    name="quantity"
                                    value={this.state.quantity}
                                    onChange={this.changeState}
                                />
                                <small style={{ color: "red" }}></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputdescription1">
                                    status
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputdescription1"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.changeState}
                                />
                                <small style={{ color: "red" }}></small>
                            </div>

                            <button type="submit" className="btn btn-success">
                                add
                            </button>
                        </form>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default AddItem;
