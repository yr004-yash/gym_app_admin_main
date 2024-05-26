import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";


import { Modal, Nav, Tab } from "react-bootstrap";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

import axios from "axios";


const Blog = ({ onClick }) => {


    const [modalToggle, setModalToggle] = useState(false);
    const [modalFilter, setModalFilter] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllBlogs`);

                setBlogs(response.data);

                // console.log(response.data.blogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        // Call the fetchBlogs function
        fetchBlogs();
    }, []);

    const [refreshToggle, setRefreshToggle] = useState(false);
    const [data, setData] = useState([

    ]);

    const deleteblog = async (blogid) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/${blogid}`);
            if (response.status === 200) {
                window.alert("blog Successfully deleted");
                window.location.reload();
            } else {
                console.log('Failed to delete trainer.');
            }
        } catch (error) {
            console.error("Error deleting trainer:", error);
            // Handle error, show error message, etc.
        }
    };




    const hendelClick = () => {
        setRefreshToggle(true);
        setTimeout(() => {
            setData([
                ...data,
                data[Math.floor(Math.random() * Math.floor(data.length - 1))],
            ]);
            setRefreshToggle(false);
        }, 1000);
    };
    return (
        <Fragment>

            <div className="card-body loadmore-content dz-scroll height750" id="DietMenusContent">
                <Nav className="nav nav-tabs diet-tabs" id="nav-tab" role="tablist">
                    <Link to="/blog" className="btn btn-primary me-2 mb-2"> All Blogs</Link>
                    <Link to="/add-blog" className="btn btn-primary light mb-2">Add Blog</Link>
                </Nav>
                {blogs && blogs.map((blog, index) => (
                    <div className="row" key={index}>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                            <img className="img-fluid" src={`${process.env.REACT_APP_BACKEND_URL}/${blog.image}`} alt="" />
                                        </div>
                                        <div className="col-xl-9 col-lg-6 col-md-6 col-sm-12">
                                            <div className="product-detail-content">
                                                <div className="new-arrival-content pr">
                                                    <h4>{blog.title}</h4>
                                                    <p><strong>Author:</strong> {blog.author}</p>
                                                    <p><strong>Date:</strong> {new Date(blog.date).toLocaleDateString()}</p>
                                                    <p><strong>Tags:</strong> {blog.tags.map(item => (
                                                        item.slice(1, -1).split(',').map(tag => (
                                                            <span key={tag.trim()} className="badge badge-success light me-1">{tag.trim().slice(1, -1)}</span>
                                                        ))
                                                    ))}
                                                   </p>
                                                    <p><strong>Comments:</strong> {blog.comments ? blog.comments.length : 0}</p>
                                                    {/* Render blog content without HTML tags */}
                                                    <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopping-cart mt-1">
                                            <div className="btn btn-primary btn-lg" onClick={() => deleteblog(blog._id)}>
                                                <i className="fa fa-plus scale5 me-3" />
                                                Delete
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Blog;
