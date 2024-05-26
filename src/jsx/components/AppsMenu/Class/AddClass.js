import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddClass = ({ onClick }) => {
    const [instructor, setInstructor] = useState("");
    const [rating, setRating] = useState("");
    const [topic, setTopic] = useState("");
    const [money, setMoney] = useState("");
    const [tags, setTags] = useState([]);
    const [date, setDate] = useState("");
    const [starttime, setStarttime] = useState("");
    const [endtime, setEndtime] = useState("");
    const [Capacity, setCapacity] = useState(0); // Changed to Number

    const handleTagsChange = (e) => {
        // Convert comma-separated values into an array
        var tagsArray = e.target.value.split(/[\s,]+/);
        setTags(tagsArray);
    };

    const addClass = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/addclass`, {
                instructor,
                rating,
                topic,
                money,
                tags,
                date,
                starttime,
                endtime,
                Capacity,
            });
            alert("Class added successfully");
            console.log("Class added successfully!");
        } catch (error) {
            console.error("Error adding class:", error);
        }
    };

    return (
        <div className="card-body col-lg-12 loadmore-content dz-scroll height750" id="DietMenusContent">
            <div className="food-default-flex col-lg-12 ps-0">
                <div className="mb-3">
                    <label className="form-label">Instructor:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={instructor}
                        onChange={(e) => setInstructor(e.target.value)}
                    />
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
                            <label className="form-label">Topic:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
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
                            <label className="form-label">Date:</label>
                            <input
                                type="date"
                                className="form-control"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </li>
                        <li className="text-nowrap mb-2">
                            <label className="form-label">Start Time:</label>
                            <input
                                type="time"
                                className="form-control"
                                value={starttime}
                                onChange={(e) => setStarttime(e.target.value)}
                            />
                        </li>
                        <li className="text-nowrap mb-2">
                            <label className="form-label">End Time:</label>
                            <input
                                type="time"
                                className="form-control"
                                value={endtime}
                                onChange={(e) => setEndtime(e.target.value)}
                            />
                        </li>
                        <li className="text-nowrap mb-2">
                            <label className="form-label">Capacity:</label>
                            <input
                                type="number"
                                className="form-control"
                                value={Capacity}
                                onChange={(e) => setCapacity(parseInt(e.target.value))}
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
            <Link to="/classes" onClick={addClass} className="btn btn-primary light btn-md ms-auto">
                <i className="fa fa-plus scale5 me-3" />
                Add Class
            </Link>
        </div>
    );
};

export default AddClass;
