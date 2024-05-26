import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Nav, Tab } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";


const Inbox = ({ onClick }) => {


    const [modalToggle, setModalToggle] = useState(false);
    const [modalFilter, setModalFilter] = useState(false);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllContacts`);

                setContacts(response.data);
                // console.log(response.data);

                // console.log(response.data.contacts);
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };

        // Call the fetchContacts function
        fetchContacts();
    }, []);

    const [refreshToggle, setRefreshToggle] = useState(false);
    const [data, setData] = useState([

    ]);

    const sendEmail = (email) => {
      window.location.href = `mailto:${email}`;
  };

    return (
      <Fragment>
      <div className="card-body loadmore-content dz-scroll height750" id="DietMenusContent">
          <Nav className="nav nav-tabs diet-tabs" id="nav-tab" role="tablist">
              <div className="btn btn-primary me-2 mb-2"> All Requests</div> 
          </Nav>
          {contacts && contacts.map((contact, index) => (
              <div className="row" key={index}>
                  <div className="col-lg-12">
                      <div className="card">
                          <div className="card-body">
                              <div className="row">
                                  <div className="col-xl-9 col-lg-6 col-md-6 col-sm-12">
                                      <div className="product-detail-content">
                                          <div className="new-arrival-content pr">
                                              <p><strong>Contact Information:</strong></p>
                                              <p><strong>First Name:</strong> {contact.fname}</p>
                                              <p><strong>Last Name:</strong> {contact.lname}</p>
                                              <p><strong>Email:</strong> {contact.email}</p>
                                              <p><strong>Phone:</strong> {contact.phone}</p>
                                              <p><strong>Message:</strong> {contact.message}</p>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="shopping-cart mt-1">
                                            <button className="btn btn-primary btn-sm" onClick={() => sendEmail(contact.email)}>
                                                <i className="fa fa-envelope scale1 me-1" />
                                                Send Email
                                            </button>
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

export default Inbox;
