import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import CkEditorBlog from '../Forms/CkEditor/CkEditorBlog';
import { Modal, Nav, Tab } from "react-bootstrap";

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [file, setFile] = useState(null);
    const [author, setAuthor] = useState("");
    const [tags, setTags] = useState([]);

    const fileHandler = (e) => {
        setFile(e.target.files[0]);
    };

    const handleContentChange = (content) => {
        setEditorContent(content);
    };
    const handleTagsChange = (e) => {
        // Convert comma-separated values into an array
        var tagsArray = e.target.value.split(/[\s,]+/);
        setTags(tagsArray);
    };

    const handleAddBlog = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('author', author);
            formData.append('title', title);
            formData.append('content', editorContent);
            formData.append('image', file);
            formData.append("tags", JSON.stringify(tags));

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/addblog`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 201) {
                window.alert('Blog added successfully');
            } else {
                window.alert('Failed to add blog');
            }
        } catch (error) {
            console.error('Error adding blog:', error.message);
        }
    };

    return (
        <>
            <Fragment>

                <div className="card-body loadmore-content dz-scroll height750" id="DietMenusContent">


                    <Nav className="nav nav-tabs diet-tabs" id="nav-tab" role="tablist" >
                        <Link to="/blog" className="btn btn-primary me-2 mb-2"> All Blogs</Link>

                        <Link to="/add-blog" className="btn btn-primary light mb-2">Add Blog</Link>
                    </Nav>


                    <div className="mb-3 ">
                        <input type="text" className="form-control w-50" placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div className="mb-3 ">
                        <input type="text" className="form-control w-50" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-xxl-12">
                            <div className="card h-auto">
                                <div className="card-body pt-3">
                                    <div className="custom-ekeditor cms-radius add-content-ckeditor mb-3">
                                        <CkEditorBlog onContentChange={handleContentChange} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="file" className="form-control" onChange={fileHandler} />
                                    </div>
                                    <li className="text-nowrap mb-2">
                                        <label className="form-label">Tags:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={tags.join(",")} // Convert array to comma-separated string
                                            onChange={handleTagsChange}
                                        />
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-3" onClick={handleAddBlog}>
                        Add Blog
                    </button>
                </div>

            </Fragment>
        </>
    );
};

export default AddBlog;
