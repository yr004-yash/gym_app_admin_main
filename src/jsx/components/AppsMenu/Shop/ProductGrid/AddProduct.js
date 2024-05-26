import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddProduct = ({ onClick }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState(null);
    const [money, setMoney] = useState("");
    const [availability, setAvailability] = useState("");
    const [size, setSize] = useState("");
    const [code, setCode] = useState("");
    const [tags, setTags] = useState([]);
    const [brand, setBrand] = useState([]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleTagsChange = (e) => {
        // Convert comma-separated values into an array
        var tagsArray = e.target.value.split(/[\s,]+/);
        setTags(tagsArray);
    };
    

    const addProduct = async () => {
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("rating", rating);
            formData.append("image", image);
            formData.append("money", money);
            formData.append("availability", availability);
            formData.append("code", code);
            formData.append("tags", JSON.stringify(tags)); // Convert array to string for FormData
            formData.append("size", size);
            formData.append("brand", brand);

            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/addproduct`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Product added successfully");
            console.log("Product added successfully!");
        } catch (error) {
            console.error("Error adding trainer:", error);
        }
    };

    return (
        <div className="card-body col-lg-12 loadmore-content dz-scroll height750" id="DietMenusContent">
            <div className="media border-bottom mb-3 pb-3 d-lg-flex d-block menu-list">
                <div className="mb-3 col-lg-12">
                    <label className="form-label">Image:</label>
                    <input type="file" accept="image/*" className="form-control" onChange={handleImageChange} />
                </div>
            </div>

            <div className="food-default-flex col-lg-12 ps-0">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="d-flex flex-wrap align-items-center">
                    <ul className="d-flex flex-wrap mb-sm-0 mb-2">
                        <li className="text-nowrap mb-2">
                            <label className="form-label">Rating:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            />
                        </li>
                        <li className="text-nowrap mb-2">
                            <label className="form-label">Money:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={money}
                                onChange={(e) => setMoney(e.target.value)}
                            />
                        </li>
                        <li className="text-nowrap mb-2">
                            <label className="form-label">Availability:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={availability}
                                onChange={(e) => setAvailability(e.target.value)}
                            />
                        </li>
                        <li className="text-nowrap mb-2">
                            <label className="form-label">Size:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            />
                        </li>
                        <li className="text-nowrap mb-2">
                            <label className="form-label">Code:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </li>
                        <li className="text-nowrap mb-2">
                            <label className="form-label">Brand:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </li>
                        <li className="text-nowrap mb-2">
                            <label className="form-label">Tags:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={tags.join(",")} // Convert array to comma-separated string
                                onChange={handleTagsChange}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <Link to="/ecom-product-detail" onClick={addProduct} className="btn btn-primary light btn-md ms-auto">
                <i className="fa fa-plus scale5 me-3" />
                Add Product
            </Link>
        </div>
    );
};

export default AddProduct;
