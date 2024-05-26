import React, { useState, Fragment } from "react";
import { Modal , Nav, Tab} from "react-bootstrap";

// Image

// import menus9 from "../../../images/menus/9.png";
// import menus10 from "../../../images/menus/10.png";
// import menus11 from "../../../images/menus/11.png";
// import menus12 from "../../../images/menus/12.png";
// import { Link } from "react-router-dom";
import DietClass from "./DietClass";
import AddClass from "./AddClass";
import { useEffect } from "react";
const ClassDetail = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);


  
  return (
    <Fragment>
     

      <div className="row">
        <div className="col-xl-12 col-xxl-15">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                  <Tab.Container defaultActiveKey="All">
                    <div className="card-header d-block pb-0 border-0">
                      <div className="d-sm-flex flex-wrap align-items-center d-block mb-md-3 mb-0">
                        <div className="me-auto pr-3 mb-3">
                          <h4 className="text-black fs-20">Classes</h4>
                        
                        </div>
                        
                         
                       
                      </div>                   
                      <Nav className="nav nav-tabs diet-tabs" id="nav-tab" role="tablist" >
                        <Nav.Link eventKey="All"  className="btn btn-warning me-2 mb-2"> All Classes</Nav.Link>

                        <Nav.Link eventKey="Lunch"  className="btn btn-warning light mb-2">Add Class</Nav.Link>
                      </Nav>                   
                    
                      <Tab.Content className=" diet-content">
                        <Tab.Pane className="" eventKey={'All'}>
                          <DietClass onClick={() => setModalToggle(true)} />
                        </Tab.Pane>
                        
                        <Tab.Pane className="" eventKey={'Lunch'}>
                          <AddClass onClick={() => setModalToggle(true)} />
                        </Tab.Pane>
                     
                      </Tab.Content>
                    </div>
                  </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </Fragment>
  );
};

export default ClassDetail;
