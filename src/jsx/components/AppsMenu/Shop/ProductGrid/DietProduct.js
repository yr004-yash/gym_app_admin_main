import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";


import { Modal, Nav, Tab } from "react-bootstrap";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

import axios from "axios";


const DietProduct = ({ onClick }) => {


  const [modalToggle, setModalToggle] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllProducts`);

        setProducts(response.data);

        // console.log(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Call the fetchproducts function
    fetchProducts();
  }, []);

  const [refreshToggle, setRefreshToggle] = useState(false);
  const [data, setData] = useState([

  ]);

  const deleteproduct = async (productid) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/${productid}`);
      if (response.status === 200) {
        window.alert("Product Successfully deleted");
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
      <div
        className="card-body loadmore-content dz-scroll height750"
        id="DietMenusContent"
      >
        {products && products.map((d, i) => (
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6  col-md-6">
                      {/* Tab panes */}
                      <Tab.Container defaultActiveKey="first">
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <img className="img-fluid" src={`${process.env.REACT_APP_BACKEND_URL}/${d.image}`} alt="" />
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
                    {/*Tab slider End*/}

                    <div className="col-xl-9 col-lg-6  col-md-6 col-sm-12">
                      <div className="product-detail-content">
                        {/*Product details*/}
                        <div className="new-arrival-content pr">
                          <h4>{d.name}</h4>
                          <div className="comment-review star-rating d-flex">
                            <ul>
                              {" "}<li> <i className="fa fa-star" /></li>
                              {/* {" "}<li><i className="fa fa-star" /></li>
                          {" "}<li><i className="fa fa-star" /></li>
                          {" "}<li><i className="fa-solid fa-star-half-stroke" /></li>
                          {" "}<li><i className="fa-solid fa-star-half-stroke" /></li> */}
                            </ul>
                            <span className="review-text ms-3">{" "}{d.rating} </span>
                            {/* <Link onClick={() => setReviewToggle(true)} className="product-review" to="/ecom-product-detail" >Write a review?</Link> */}
                          </div>
                          <div className="d-table mb-2">
                            <p className="price float-left d-block">${d.money}</p>
                          </div>
                          <p> Availability:{" "}<span className="item"> {" "}{d.availability} <i className="fa fa-shopping-basket" /></span></p>
                          <p> Product code: <span className="item">{d.code}</span>{" "}</p>
                          <p>Brand: <span className="item">{
                            d.brand
                          }</span></p>
                          <p>
                            Product tags:&nbsp;&nbsp;
                            {d.tags.map(item => (
                              item.slice(1, -1).split(',').map(tag => (
                                <span key={tag.trim()} className="badge badge-success light me-1">{tag.trim().slice(1, -1)}</span>
                              ))
                            ))}
                          </p>
                          <div className="size-filter">
                            <h4 className="m-b-15">Select size</h4>
                            <div
                              className="btn-group"
                              data-toggle="buttons"
                            >
                              <label className="btn btn-outline-primary light btn-sm">
                                <input
                                  type="radio"
                                  className="position-absolute invisible"
                                  name="options"
                                  id="option5"
                                />
                                XS
                              </label>
                              <label className="btn btn-outline-primary light btn-sm">
                                <input
                                  type="radio"
                                  className="position-absolute invisible"
                                  name="options"
                                  id="option1"
                                />
                                SM
                              </label>
                              <label className="btn btn-outline-primary light btn-sm">
                                <input
                                  type="radio"
                                  className="position-absolute invisible"
                                  name="options"
                                  id="option2"
                                />
                                MD
                              </label>
                              <label className="btn btn-outline-primary light btn-sm">
                                <input
                                  type="radio"
                                  className="position-absolute invisible"
                                  name="options"
                                  id="option3"
                                />
                                LG
                              </label>
                              <label className="btn btn-outline-primary light btn-sm">
                                <input
                                  type="radio"
                                  className="position-absolute invisible"
                                  name="options"
                                  id="option4"
                                />
                                XL
                              </label>
                            </div>
                          </div>


                         
                        </div>
                      </div> <div className="shopping-cart mt-1">
                            <div style={{ color: "white", scale: '0.8', marginLeft: '-1rem' }}
                              className="btn btn-primary btn-lg"
                              to="/ecom-product-detail"
                              onClick={() => {
                                deleteproduct(d._id)
                              }}
                            >
                              <i className="fa fa-plus scale5 me-3" />
                              Delete
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* review */}

          </div>
        ))}
      </div>
      <div className="card-footer style-1 text-center border-0 pt-0 pb-4">
        <div
          className="text-primary dz-load-more custom-box"
          onClick={() => hendelClick()}
        >
          <Link
            className="text-primary dz-load-more fa fa-chevron-down"
            // id="DietMenus"
            to="/food-menu"
          // rel="ajax/food-menu-list"
          >
            {refreshToggle && <i className="fa fa-refresh"></i>}
          </Link>
        </div>
      </div>


    </Fragment>
  );
};

export default DietProduct;
