import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab } from "react-bootstrap";
import axios from "axios";

const DietClass = ({ onClick }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllClasses`);
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  const deleteClass = async (classId) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/deleteclass/${classId}`);
      console.log(classId);
      if (response.status === 200) {
        window.alert("Class successfully deleted");
        window.location.reload();
      } else {
        console.log('Failed to delete class.');
      }
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };

  return (
    <Fragment>
      <div className="card-body loadmore-content dz-scroll height750" id="DietMenusContent">
        {classes.map((classItem, index) => (
          <div className="row" key={index}>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="product-detail-content">
                        <div className="new-arrival-content pr">
                          <h4>{classItem.topic}</h4>
                          <div className="comment-review star-rating d-flex">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              {/* Add more stars if needed */}
                            </ul>
                            <span className="review-text ms-3">{classItem.rating}</span>
                          </div>
                          <div className="d-table mb-2">
                            <p className="price float-left d-block">${classItem.money}</p>
                          </div>
                          <p>Booked: <span className="item">{classItem.remainCapacity}/{classItem.Capacity} <i className="fa fa-shopping-basket" /></span></p>
                          <p>Instructor: <span className="item">{classItem.instructor}</span></p>
                          <p>Date: <span className="item">{new Date(classItem.date).toLocaleDateString()}</span></p>
                          <p>Time: <span className="item">{classItem.starttime} - {classItem.endtime}</span></p>
                          {/* Remove Capacity since it's now shown in Availability */}
                          {/* <p>Capacity: <span className="item">{classItem.Capacity}</span></p> */}
                          <p>Tags: <span className="item">{classItem.tags.map(tag => <span key={tag} className="badge badge-success light me-1">{tag}</span>)}</span></p>
                        </div>
                      </div>
                      <div className="shopping-cart mt-1">
                        <div style={{ color: "white", scale: '0.8', marginLeft: '-1rem' }} className="btn btn-primary btn-lg" to="/ecom-product-detail" onClick={() => deleteClass(classItem._id)}>
                          <i className="fa fa-plus scale5 me-3" />
                          Delete
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-footer style-1 text-center border-0 pt-0 pb-4">
        <div className="text-primary dz-load-more custom-box">
          <Link className="text-primary dz-load-more fa fa-chevron-down" to="/classes">
            <i className="fa fa-refresh" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default DietClass;
